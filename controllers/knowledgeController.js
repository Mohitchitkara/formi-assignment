const chunkService = require('../services/chunkService');
const knowledge = require('../data/knowledge.json');

exports.getChunk = (req, res) => {
  // Access query and location from req.query for GET requests
  const query = req.query.query; // Line 7: Fixed to use req.query
  const location = req.query.location || 'Delhi'; // Default to Delhi

  // Input validation
  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }
  if (!['Delhi', 'Bengaluru'].includes(location)) {
    return res.status(400).json({ error: 'Invalid location. Must be Delhi or Bengaluru' });
  }

  try {
    // Find relevant chunk from knowledge base for the specified location
    const chunk = chunkService.findRelevantChunk(query, knowledge[location]);
    
    if (!chunk) {
      return res.status(404).json({ 
        message: "I'm sorry, I don't have that information. Please contact our team.",
        status: 'not_found'
      });
    }

    // Simplified token check (character-based, since tiktoken caused issues)
    const responseString = JSON.stringify(chunk);
    const estimatedTokenCount = Math.ceil(responseString.length / 4); // 1 token ≈ 4 characters

    if (estimatedTokenCount > 800) {
      // Truncate response to fit within 800-token limit
      const truncatedChunk = responseString.slice(0, 700) + '...';
      return res.json({ 
        data: truncatedChunk, 
        status: 'truncated',
        estimatedTokenCount: estimatedTokenCount
      });
    }

    res.json({ 
      data: chunk, 
      status: 'success',
      estimatedTokenCount: estimatedTokenCount
    });
  } catch (error) {
    console.error('Error in getChunk:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Something went wrong. Please try again later.'
    });
  }
};
// services/chunkService.js
module.exports = {
  findRelevantChunk: (query, knowledge) => {
    // Simple keyword-based matching
    for (const key of Object.keys(knowledge)) {
      if (query.toLowerCase().includes(key)) {
        return knowledge[key];
      }
    }
    return null; // No matching chunk found
  }
};
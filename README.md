Barbeque Nation Chatbot
This project implements an inbound enquiry and booking chatbot for Barbeque Nation outlets in Delhi and Bengaluru, built using Retell AI's state machine. It handles FAQs, new bookings, modifications, and cancellations, with a knowledge base API and post-call analysis logging to Google Sheets. The project is a fork of agentops-template-repo.
Features

Conversational Flow: Manages intents (FAQ, booking, modification, cancellation) using Retell AI's state machine with Jinja-templated prompts (prompts/*.jinja).
Knowledge Base API: Serves location-specific FAQ responses (Delhi/Bengaluru) via /knowledge/faq, supporting GET and POST requests, with 800-token limit compliance.
Post-Call Analysis (Bonus): Logs conversation data (e.g., Call Time, Call Outcome) to Google Sheets using the Google Sheets API.
Chatbot Frontend (Bonus): A simple HTML/JavaScript interface integrating with Retell AI's API for text-based interactions.

Project Structure

api/: Knowledge base API (server.js, knowledgeController.js, knowledge.json).
frontend/: Chatbot UI (index.html, script.js, style.css).
prompts/: State prompts (faq.jinja, booking.jinja) and transitions (transitions.json).
post-call/: Google Sheets logging script (logToSheets.js).
docs/: Architecture diagram (architecture.png) and API documentation (api-docs.md).

Setup and Installation

Clone the Repository:git clone https://github.com/Mohitchitkara/formi-assignment.git
cd agentops-template-repo


Install API Dependencies:cd api
npm install express


Run the API:node server.js


Deploy Frontend (e.g., on Netlify):cd frontend
netlify deploy --prod


Configure Retell AI: Set up the state machine in beta.retellai.com with prompts and API calls.
Google Sheets Setup: Enable Google Sheets API, add credentials.json to post-call/, and share the Sheet with the service account.


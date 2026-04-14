Local Semantic Search Engine (From Scratch)
## Overview

This project demonstrates a semantic search system built from scratch in JavaScript without using external AI APIs or vector databases.

It simulates how search engines work internally using:

Tokenization
Vector representation of text
Cosine similarity
Custom in-memory vector database
## Features
Convert text into simple numeric vectors
Build vocabulary from dataset
Create vector database in memory
Perform similarity search using cosine similarity
Rank results based on relevance score
## Tech Stack
Node.js (JavaScript ES Modules)
File System (fs module)
Pure JavaScript (No external AI APIs)
## Project Structure
Endee/
├── app.js
├── data.json
├── package.json
└── README.md
## How It Works
1. Tokenization

Text is split into words and normalized.

2. Vocabulary Building

All unique words are collected from dataset.

3. Vector Conversion

Each sentence is converted into a frequency-based vector.

4. Similarity Calculation

Cosine similarity is used to compare query and stored vectors.

5. Ranking

Results are sorted based on similarity score.

## How to Run
1. Clone repository
git clone https://github.com/madhu06-13/endee.git
cd endee
2. Run the program
node app.js
## Example Output
 Building vocabulary...
 Creating vector database...

 Query: What is artificial intelligence?

 Search Results:
1. Artificial Intelligence is the future of technology (score: 0.6547)
2. Machine learning is a subset of AI (score: 0.2182)
3. Deep learning uses neural networks (score: 0.0000)
## Key Concepts Demonstrated
NLP preprocessing (tokenization)
Vector space model
Cosine similarity
Basic semantic search system
In-memory database simulation
## Future Improvements
Replace manual vectors with Word2Vec / BERT embeddings
Add real vector database (Endee / Pinecone / FAISS)
Build frontend UI for search
Add API backend (Express.js)

## Conclusion

This project demonstrates how semantic search works internally by building a simplified vector space model without relying on external AI services.
import fs from "fs";

// Load data
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

// Simple tokenizer
function tokenize(text) {
  return text.toLowerCase().split(/\W+/);
}

// Build vocabulary
function buildVocab(data) {
  const vocab = new Set();
  data.forEach(item => {
    tokenize(item.text).forEach(word => vocab.add(word));
  });
  return Array.from(vocab);
}

// Convert text to vector
function textToVector(text, vocab) {
  const words = tokenize(text);
  return vocab.map(word => words.filter(w => w === word).length);
}

// Cosine similarity
function cosineSimilarity(vecA, vecB) {
  const dot = vecA.reduce((sum, val, i) => sum + val * vecB[i], 0);
  const magA = Math.sqrt(vecA.reduce((sum, val) => sum + val * val, 0));
  const magB = Math.sqrt(vecB.reduce((sum, val) => sum + val * val, 0));
  return dot / (magA * magB || 1);
}

// Build vector DB
function buildVectorDB(vocab) {
  return data.map(item => ({
    id: item.id,
    text: item.text,
    vector: textToVector(item.text, vocab)
  }));
}

// Search
function search(query, vocab, vectorDB) {
  const queryVector = textToVector(query, vocab);

  const results = vectorDB.map(item => {
    const score = cosineSimilarity(queryVector, item.vector);
    return { ...item, score };
  });

  results.sort((a, b) => b.score - a.score);

  console.log("\n Search Results:");
  results.slice(0, 3).forEach((res, i) => {
    console.log(`${i + 1}. ${res.text} (score: ${res.score.toFixed(4)})`);
  });
}

// Main
function main() {
  console.log(" Building vocabulary...");
  const vocab = buildVocab(data);

  console.log(" Creating vector database...");
  const vectorDB = buildVectorDB(vocab);

  const query = "What is artificial intelligence?";
  console.log(`\n Query: ${query}`);

  search(query, vocab, vectorDB);
}

main();
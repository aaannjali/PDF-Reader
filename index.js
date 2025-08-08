import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { Pinecone } from "@pinecone-database/pinecone";
import { PineconeStore } from "@langchain/pinecone";
import * as dotenv from "dotenv";
dotenv.config();

async function indexDocument() {
  const PDF_PATH = "./Dsa.pdf";
  const loader = new PDFLoader(PDF_PATH);
  const rawDoc = await loader.load();

  console.log(rawDoc.length);

  // Chunking the document into smaller parts
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const chunkedDocs = await textSplitter.splitDocuments(rawDoc);
  const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GEMINI_API_KEY,
    model: "text-embedding-004",
  });

  //pinecone implementation
  const pinecone = new Pinecone();
  const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX_NAME);
  // langchain (chanking, embedding, and database) implementation
  await PineconeStore.fromDocuments(chunkedDocs, embeddings, {
    pineconeIndex,
    maxConcurrency: 5,
  });
}

indexDocument();

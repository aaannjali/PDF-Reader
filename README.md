# PDF-Reader  
**RAG PDF Question-Answering System (with Google Gemini)**  

## Overview  
This project is a **Retrieval-Augmented Generation (RAG)** system built using **Google Gemini** as the **LLM**.  
It allows you to upload a PDF, process it into vector embeddings, and then ask questions based on the PDF’s content.  
The system retrieves the most relevant information from the PDF and uses the LLM to generate accurate, context-based answers.  

## How It Works  
1. **PDF Upload** – The PDF file is loaded into the system.  
2. **Text Chunking** – The document is split into smaller chunks for efficient processing.  
3. **Vector Embedding** – Each chunk is converted into vector embeddings to represent meaning in numeric form.  
4. **Storage** – The embeddings are stored in a vector database for quick similarity search.  
5. **Question Input** – The user asks a question (e.g., *"What is Binary Search Tree?"*).  
6. **Retrieval** – The system searches the vector database for the most relevant chunks.  
7. **LLM Processing** – The retrieved chunks are sent to **Google Gemini**, which generates a precise answer using the provided context.  
8. **Answer Output** – The final answer is displayed to the user.  

## Example  
**PDF Content:** Includes a section explaining Binary Search Trees (BST).  
**User Query:** *"What is Binary Search Tree?"*  
**Output:** A clear definition and explanation from the PDF content, not from the LLM’s general knowledge.  

## Tech Stack  
- **LLM:** Google Gemini  
- **Embedding Model:** Google Gemini  
- **Vector Database:** e.g., Pinecone  
- **Language:** JavaScript  

## .env file
- **GEMINI_API_KEY** = ADD YOUR APIKEY. 
- **PINECONE_API_KEY** = ADD YOUR APIKEY
- **PINECONE_ENVIRONMENT** = ADD YOUR APIKEY
- **PINECONE_INDEX_NAME** = ADD YOUR APIKEY


## Features  
- Load and process any PDF for context-based Q&A.  
- Handles long documents by chunking text.  
- Uses vector similarity search for fast, accurate retrieval.  
- Generates fact-based answers from the provided PDF, reducing hallucinations.  



# learningReact-chatBot

A simple React-based chatbot application that connects to a free Hugging Face Mistral model for poetic, concise replies which I learnt from [SuperSimpleDev's Tutorial](https://www.youtube.com/@SuperSimpleDev)

## Table of Contents

* [Overview](#overview)
* [How It Works](#how-it-works)
* [Key Learnings](#key-learnings)
* [Features](#features)
* [Technologies Used](#technologies-used)


---

## Overview

**learningReact-chatBot** is a React-based chatbot that sends user messages to a Mistral model hosted on Hugging Face and returns short, poetic quotes. The focus is on learning React fundamentals, API integration, and handling asynchronous chat responses.

---

## How It Works

* The UI consists of a chat window with an input field.
* When the user sends a message, it is added to the conversation history.
* The app sends the message to a small backend proxy, which calls Hugging Face’s API (avoiding CORS issues and keeping the API key safe).
* The Hugging Face model generates a concise, poetic reply and sends it back to the frontend for display.

---

## Key Learnings

* **React Fundamentals** – Components, props, and state management.
* **Asynchronous Data Fetching** – Sending/receiving messages with `fetch` and async/await.
* **API Integration** – Connecting a React frontend to a backend proxy and external AI API.
* **State & UI Updates** – Maintaining and rendering chat history dynamically.
* **Component Structure** – Modular, reusable functional components.


## Features

* Real-time message updates
* AI-generated poetic, concise replies
* Responsive, clean UI
* Secure API requests via backend proxy

---

## Technologies Used

* [React](https://reactjs.org/)
* [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Hugging Face Inference API](https://huggingface.co/inference-api)

---

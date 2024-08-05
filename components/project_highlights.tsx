import React from "react";
import {Card, Carousel} from "@/components/ui/apple-cards-carousel";



const data = [
    {
        categories: ["LLM"],
        title: "Intelligent Knowledge Management System",
        // src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        src: "https://zjvjdaqxzcircycxugjm.supabase.co/storage/v1/object/public/projects/p1-2.png",
        description: "This platform is a comprehensive and robust system designed to streamline interactions with multiple Large Language Models (LLMs) and other AI tools. It supports a wide range of data inputs, including text, images, videos, audio, PDFs, documents, and URLs, making it versatile and adaptable to various use cases. The system's architecture is highly extensible, allowing users to seamlessly connect and integrate diverse data sources and models. The backend is powered by FastAPI, ensuring efficient processing and API management, while the frontend is built using Next.js for a dynamic and responsive user experience.\n" +
            "Supports multiple models, including OpenAI, Claude, and local models like Mistral through Ollama.\n" +
            "" +
            "" +
            "- Users can switch between different models anytime within a chat for flexible interaction.\n" +
            "- Supports diverse input types such as text, images, videos, audio, PDFs, documents, and URLs.\n" +
            "- Real-time data connectivity via AirByte ensures access to the latest information and insights.\n" +
            "- Enables multi-user collaboration within the same chat environment, ideal for teamwork. Organizes messages in a tree structure, allowing new threads from any point in the conversation.\n" +
            "- Direct Reply Mode for straightforward interactions with models.\n" +
            "- Advanced Mode handles complex queries with a multi-step process:\n" +
            "    - Automatically refines and clarifies user queries.\n" +
            "    - Breaks down complex queries into manageable tasks.\n" +
            "    - Executes tasks systematically and aggregates results into a final output.\n" +
            "    - Applies safeguards to ensure accuracy and reliability.\n" +
            "- Extensible to connect with any data source for comprehensive analysis and processing.\n" +
            "- Supports collaborative editing, allowing users to interact with and edit the same chat.\n" +
            "- Provides chat summarization for quick overviews of long or complex discussions.\n",
        links: ["https://github.com/timnirmal/talontech_ui"],
        images: ["https://zjvjdaqxzcircycxugjm.supabase.co/storage/v1/object/public/projects/p1-1.png", "https://zjvjdaqxzcircycxugjm.supabase.co/storage/v1/object/public/projects/p1-2.png"],
        // content: <DummyContent />,
    },
    {
        category: "GenAI",
        title: "MAS AI Artwork Generator",
        src: "https://zjvjdaqxzcircycxugjm.supabase.co/storage/v1/object/public/projects/p2-1.jpg",
        description: "This platform is a comprehensive and robust system designed to streamline interactions with multiple Large Language Models (LLMs) and other AI tools. It supports a wide range of data inputs, including text, images, videos, audio, PDFs, documents, and URLs, making it versatile and adaptable to various use cases. The system's architecture is highly extensible, allowing users to seamlessly connect and integrate diverse data sources and models. The backend is powered by FastAPI, ensuring efficient processing and API management, while the frontend is built using Next.js for a dynamic and responsive user experience.\n" +
            "Supports multiple models, including OpenAI, Claude, and local models like Mistral through Ollama.\n" +
            "" +
            "" +
            "- Users can switch between different models anytime within a chat for flexible interaction.\n" +
            "- Supports diverse input types such as text, images, videos, audio, PDFs, documents, and URLs.\n" +
            "- Real-time data connectivity via AirByte ensures access to the latest information and insights.\n" +
            "- Enables multi-user collaboration within the same chat environment, ideal for teamwork. Organizes messages in a tree structure, allowing new threads from any point in the conversation.\n" +
            "- Direct Reply Mode for straightforward interactions with models.\n" +
            "- Advanced Mode handles complex queries with a multi-step process:\n" +
            "    - Automatically refines and clarifies user queries.\n" +
            "    - Breaks down complex queries into manageable tasks.\n" +
            "    - Executes tasks systematically and aggregates results into a final output.\n" +
            "    - Applies safeguards to ensure accuracy and reliability.\n" +
            "- Extensible to connect with any data source for comprehensive analysis and processing.\n" +
            "- Supports collaborative editing, allowing users to interact with and edit the same chat.\n" +
            "- Provides chat summarization for quick overviews of long or complex discussions.\n",
        links: [],
        images: ["https://zjvjdaqxzcircycxugjm.supabase.co/storage/v1/object/public/projects/p2-1.jpg", "https://zjvjdaqxzcircycxugjm.supabase.co/storage/v1/object/public/projects/p2-2.png"],
        // content: <DummyContent />,
    },
    {
        category: ["NLP","ML"],
        title: "WIP : MediSync",
        src: "https://zjvjdaqxzcircycxugjm.supabase.co/storage/v1/object/public/projects/p6-1.png",
        description:
            "\n" +
            "The Medical Sector System is an integrated healthcare platform designed to streamline patient care, enhance diagnostic accuracy, and improve overall healthcare management. By leveraging advanced technologies such as Natural Language Processing (NLP), Artificial Intelligence (AI), and Machine Learning (ML), our system aims to provide a seamless and efficient experience for both patients and healthcare providers.\n" +
            "\n" +
            "The platform encompasses a range of services, from symptom analysis and disease prediction to appointment scheduling and patient health logs. It is designed to facilitate better communication and collaboration between patients and doctors, ensure accurate and timely medical interventions, and promote overall health and wellness through personalized recommendations and educational resources.\n" +
            "\n" +
            "### **Key Features**\n" +
            "\n" +
            "1. **Symptom Analysis and Disease Prediction:** Utilizes AI and NLP to analyze patient symptoms, predict potential diseases, and recommend specialist doctors.\n" +
            "2. **Doctor Recommendation and Appointment Scheduling:** Displays doctors by specialty, location, and availability, allowing patients to book appointments easily.\n" +
            "3. **Patient Health Logs and Medical Records:** Provides interfaces for daily health logs and securely stores treatment plans, doctor recommendations, and test results.\n" +
            "4. **Health Tracking and Notifications:** Monitors health metrics, alerts patients to abnormalities, and offers personalized health tips and medication reminders.\n" +
            "5. **Educational Content and Emergency Services Directory:** Delivers educational resources on health maintenance and quick access to emergency contacts and medical facilities.\n" +
            "6. **Doctor Collaboration and Treatment Optimization:** Enables secure messaging between doctors and provides tools for creating and optimizing treatment plans.\n" +
            "\n" +
            "\n" +
            "\n" +
            // "# 2. Full System Design**\n" +
            "\n" +
            "## **Patient End**\n" +
            "\n" +
            "**Symptom Analysis and Disease Prediction**\n" +
            "\n" +
            "- **Symptom Input and Clarification:**\n" +
            "    - Utilize NLP and AI for symptom input and clarification with history taking.\n" +
            "    - Features: Chat interface, autocomplete suggestions, history save, generate clarification questions, use questionnaire history.\n" +
            "- **Disease Prediction:**\n" +
            "    - Predict diseases based on symptom analysis.\n" +
            "    - Features: AI model for disease prediction, continuous learning mechanism for model improvement.\n" +
            "- **Specialist Recommendation:**\n" +
            "    - Recommend specialist doctors based on predicted conditions.\n" +
            "    - Features: Doctor profiles, specialist matching algorithm.\n" +
            "\n" +
            "**Doctor Channeling and Specialist Recommendation**\n" +
            "\n" +
            "- **Doctor Discovery:**\n" +
            "    - Display doctors by specialty, location (map), and availability.\n" +
            "    - Features: Doctor profiles, location-based search, availability calendar.\n" +
            "- **Appointment Booking:**\n" +
            "    - Enable appointment bookings and notifications.\n" +
            "    - Features: User interface for selecting doctors and booking appointments, notification system for appointment reminders and confirmations.\n" +
            "- **Doctor Verification and Reviews:**\n" +
            "    - Include verified doctor profiles with user reviews.\n" +
            "    - Features: Review system for doctors, verification process for doctors' credentials and expertise.\n" +
            "\n" +
            "**Patient Logs and History**\n" +
            "\n" +
            "- **Daily Health Logs:**\n" +
            "    - Provide interfaces for daily health logs (symptoms, medication adherence, sleep, and activity levels).\n" +
            "    - Features: Design interfaces for entering daily health metrics, data visualization tools for health trends.\n" +
            "- **Medical Records Storage:**\n" +
            "    - Store treatment plans, doctor recommendations, and test results.\n" +
            "    - Features: Secure storage, access controls, health summaries.\n" +
            "\n" +
            "**Notification and Health Tracking**\n" +
            "\n" +
            "- **Health Monitoring:**\n" +
            "    - Monitor health metrics and alert patients to abnormalities.\n" +
            "    - Features: Integration with wearable devices or manual entry, abnormality detection algorithm.\n" +
            "- **Personalized Health Tips:**\n" +
            "    - Offer personalized health tips and lifestyle recommendations.\n" +
            "    - Features: Customizable notification system, health improvement tips.\n" +
            "- **Medication Adherence:**\n" +
            "    - Medication adherence notification and logs based on treatment plans.\n" +
            "    - Features: Reminder notifications, adherence tracking.\n" +
            "\n" +
            "**User Education and Awareness**\n" +
            "\n" +
            "- **Educational Resources:**\n" +
            "    - Provide educational resources on medication, lifestyle, and health maintenance.\n" +
            "    - Features: Repository of articles, videos, and health guides.\n" +
            "- **Drug Interaction Information:**\n" +
            "    - Information on drug interactions, allergies, and contraindications.\n" +
            "    - Features: Drug interaction checker, allergy information.\n" +
            "\n" +
            "**Emergency Services Directory**\n" +
            "\n" +
            "- **Emergency Contacts:**\n" +
            "    - Quick access to emergency contacts and nearby medical facilities.\n" +
            "    - Features: Emergency contact database, integration with mapping services, quick access interface.\n" +
            "\n" +
            "### **Doctor End**\n" +
            "\n" +
            "**Patient Management**\n" +
            "\n" +
            "- **Appointment Scheduling and Patient Records:**\n" +
            "    - Appointment scheduling and patient record management.\n" +
            "    - Features: Doctor and assistant access, patient histories, treatment plans, and logs.\n" +
            "\n" +
            "**History Taking by Doctors**\n" +
            "\n" +
            "- **Efficient History Taking Tools:**\n" +
            "    - Develop templates and tools for efficient and comprehensive history taking.\n" +
            "    - Features: Customizable templates, interactive history taking forms.\n" +
            "\n" +
            "**Treatment Plan Generation/Optimization**\n" +
            "\n" +
            "- **Treatment Plan Tools:**\n" +
            "    - Tools for creating and optimizing treatment plans.\n" +
            "    - Features: Drug and therapy recommendations, patient history integration.\n" +
            "\n" +
            "**Collaboration and Evaluation**\n" +
            "\n" +
            "- **Secure Messaging:**\n" +
            "    - Secure messaging and consultation features for collaborating with other healthcare professionals.\n" +
            "    - Features: Messaging platform, shared access to patient treatment plans and histories.\n" +
            "- **Analytics and Reporting:**\n" +
            "    - Analytics tools for evaluating treatment outcomes, patient progress, and system usage.\n" +
            "    - Features: Treatment outcome analytics, patient progress tracking, system usage reports.",
        // links: ["https://github.com/timnirmal/YT_UI_Final"],
        images: ["https://zjvjdaqxzcircycxugjm.supabase.co/storage/v1/object/public/projects/p6-1.png"],
        // content: <DummyContent />,
    },
    {
        category: ["NLP","ML"],
        title: "Brain Tumor Detection and Classification",
        src: "https://zjvjdaqxzcircycxugjm.supabase.co/storage/v1/object/public/projects/p7-1.png",
        description: "This project is focused on developing a system for detecting and classifying brain tumors using advanced deep learning models. The system is enhanced with explainable AI (XAI) techniques to provide clear insights into the decision-making process, helping users understand how predictions are made.\n" +
            "\n" +
            "### Key Features:\n" +
            "- Brain Tumor Classification: Implements several state-of-the-art deep learning models such as FastAI, DenseNet, ResNet, VGG, and Vision Transformers to accurately classify brain tumors based on MRI scans.\n" +
            "- Explainable AI (XAI): Utilizes Grad-CAM and Saliency Maps to visualize which areas of the brain scans are most influential in the model's decisions, making the predictions more transparent and understandable.\n" +
            "- Data Handling: The system is capable of managing and preprocessing multiple datasets, ensuring the data is clean and ready for training and evaluation.\n" +
            "- Model Performance Evaluation: Includes tools for benchmarking model performance, allowing for the comparison of different models and fine-tuning based on specific metrics.\n" +
            "- Interpretability Tools: Integration with interpretability libraries to provide in-depth analysis of model outputs, making it easier to understand and trust the results.\n" +
            "\n" +
            "\n" +
            "This project provides a comprehensive solution for brain tumor detection, offering both high-performance classification and the ability to interpret the results, which is crucial in medical applications.",
        links: ["https://github.com/timnirmal/cd_fastai/blob/master/predict_models/fastai_models.py"],
        images: ["https://zjvjdaqxzcircycxugjm.supabase.co/storage/v1/object/public/projects/p7-2.png"],
        // content: <DummyContent />,
    },

    {
        category: ["NLP","ML"],
        title: "Multimodal Hate Speech and Sentiment Detection System",
        src: "https://zjvjdaqxzcircycxugjm.supabase.co/storage/v1/object/public/projects/p3-1.jpg",
        description: "This project implements a multimodal machine learning approach, integrating audio and video data to predict hate speech and sentiment severity. The goal is to accurately identify and classify the emotional content of multimedia inputs, providing a comprehensive understanding of expressed sentiments and potential hate speech content.\n" +
            "\n" +
            "### Audio Data Processing:\n" +
            "- Converts audio data into a suitable format for analysis. \n" +
            "- Utilizes one-hot encoding for categorical data and cleans the dataset by removing null values. \n" +
            "- Splits the data into training and testing subsets. \n" +
            "- Trains models and selects the most accurate one by comparing predictions against test data.\n" +
            "\n" +
            "### Video Data Processing:\n" +
            "- Extracts features relevant to age, gender, and emotion classes to augment prediction models. \n" +
            "- Applies one-hot encoding and cleans the data by removing null values. \n" +
            "- Splits the data into training and testing subsets. \n" +
            "- Trains models and selects the most accurate one based on test data comparison.\n" +
            "\n" +
            "### Class/Domain Prediction:\n" +
            "- Utilizes word2vec embeddings passed to a Keras embedding layer with LSTM and dense layers to categorize text into classes such as Sports, Religious, Political, Sexual, Education, and Entertainment. \n" +
            "\n" +
            "### Age and Gender Prediction from Audio:\n" +
            "- Audio is separated into chunks, and features like mean, skew, kurtosis, and median are extracted. \n" +
            "- Trained models predict age group and gender based on these features.\n" +
            "\n" +
            "### User Interface (UI):\n" +
            "- Starts with a YouTube URL input, downloads the video, extracts audio, and processes it using Google Cloud services. \n" +
            "- Text data is preprocessed chunk by chunk, with fuzzy matching techniques used to maintain the original metadata and sequence. \n" +
            "- Classifies text into predefined categories and processes it through a pipeline to clean, translate, and tokenize data.\n" +
            "\n" +
            "### Data Preprocessing Pipeline:\n" +
            "- Cleans text by replacing URLs, mentions, numbers, emojis, and extra white spaces. \n" +
            "- Translates text from English to Sinhala and converts Singlish to Sinhala. \n" +
            "- Tokenizes, removes stop words, and detokenizes text. \n" +
            "- Simplifies Sinhala letters using specific mappings and fixes vowel letters. \n" +
            "- This system is designed to handle complex multimedia inputs, preprocess and analyze data, and provide accurate sentiment and hate speech detection.",
        links: ["https://github.com/timnirmal/YT_UI_Final"],
        images: ["https://zjvjdaqxzcircycxugjm.supabase.co/storage/v1/object/public/projects/p3-1.jpg"],
        // content: <DummyContent />,
    },

    {
        category: "Ecommerce",
        title: "Customer Satisfaction Prediction",
        src: "https://zjvjdaqxzcircycxugjm.supabase.co/storage/v1/object/public/projects/p4-3.png",
        description: "This project is focused on predicting customer satisfaction on eCommerce platforms, addressing the challenge of unreliable or insufficient post-purchase feedback. By analyzing customer behavior and reviews, this solution helps businesses enhance customer satisfaction and make informed decisions.\n" +
            "\n" +
            "### Objectives:\n" +
            "\n" +
            "- Predict customer satisfaction by categorizing orders and product reviews using classifiers. \n" +
            "- Analyze data patterns and perform feature engineering. \n" +
            "- Conduct sentiment analysis to understand its impact on satisfaction. \n" +
            "- Predict customer satisfaction for new products.\n" +
            "\n" +
            "### Importance:\n" +
            "\n" +
            "- Essential for recommending relevant products, managing product assortment, and maintaining positive customer relationships. \n" +
            "- Supports informed decision-making regarding product listings based on customer feedback.\n" +
            "\n" +
            "### Dataset:\n" +
            "\n" +
            "- Source: Brazilian E-Commerce Public Dataset by Olist, containing 100,000 orders from 2016 to 2018.\n" +
            "- Features: Includes details such as price, order status, payment, freight performance, customer location, product attributes, and customer reviews.\n" +
            "\n" +
            "### Methodology:\n" +
            "\n" +
            "- Data Preprocessing: Conversion of data types, removal of null values and duplicates, cleansing non-English characters, and standardizing city names. Translation of Portuguese content to English.\n" +
            "- Feature Engineering: Introduction of new features like delivery days, estimated delivery days, and metrics such as RFM Analysis and Customer Lifetime Value. Computation of product-based features like volume and density. \n" +
            "- Sentiment Analysis: Employed TextBlob, VADER, and machine learning models to analyze review sentiments, with Logistic Regression, SVC, and Word2Vec + LSTM showing high accuracy. \n" +
            "- Modeling: Simplified dataset for modeling, normalized features, and converted the target variable into a binary classification problem. Tested models include Naive Bayes, Logistic Regression, Decision Tree, Random Forest, GBDT, and Neural Networks.\n" +
            "\n" +
            "### Results:\n" +
            "\n" +
            "- Gradient Boosting Decision Tree (GBDT) and Neural Networks demonstrated high performance, effectively predicting customer satisfaction based on processed and engineered features.\n" +
            "\n" +
            "### User Interface (UI):\n" +
            "\n" +
            "- A user interface was created to demonstrate and test models with different configurations. Users can generate a random profile, add items to the cart, set order details, and receive a predicted satisfaction score based on the provided information.\n" +
            "- This project provides a robust framework for predicting customer satisfaction, leveraging feature engineering, sentiment analysis, and advanced modeling techniques to support eCommerce platforms in improving customer experience and decision-making.\n" +
            "\n",
        links: ["https://github.com/timnirmal/DM_project"],
        images: ["https://zjvjdaqxzcircycxugjm.supabase.co/storage/v1/object/public/projects/p4-1.png", "https://zjvjdaqxzcircycxugjm.supabase.co/storage/v1/object/public/projects/p4-2.png"],
        // content: <DummyContent />,
    },
    {
        category: "Security",
        title: "Intrusion Detection System",
        src: "https://zjvjdaqxzcircycxugjm.supabase.co/storage/v1/object/public/projects/p5-1.jpg",
        description: "This project involves the development of a system designed for real-time anomaly detection in network traffic, utilizing both supervised and unsupervised machine learning methods. The system is equipped with a user interface and an API, enabling comprehensive analysis and monitoring of network traffic for anomalies.\n" +
            "\n" +
            "### Anomaly Detection:\n" +
            "\n" +
            "- Implements real-time detection of anomalies in network traffic.\n" +
            "- Utilizes a combination of supervised and unsupervised machine learning methods to identify irregular patterns and potential security threats.\n" +
            "\n" +
            "### User Interface (UI):\n" +
            "\n" +
            "- Provides an intuitive interface for users to monitor and analyze network traffic data.\n" +
            "- Facilitates the visualization of detected anomalies and allows users to interact with the data in real-time.\n" +
            "\n" +
            "### API Integration:\n" +
            "\n" +
            "- Features an API that enables seamless integration with other systems and tools.\n" +
            "- Allows for automated data processing and anomaly detection, making it adaptable to various network environments.\n" +
            "\n" +
            "### Comprehensive Analysis:\n" +
            "\n" +
            "- Supports detailed analysis of network traffic, enabling users to drill down into specific events and patterns.\n" +
            "- Offers insights into the nature of detected anomalies, aiding in prompt and informed decision-making.\n" +
            "\n" +
            "This system provides a robust solution for monitoring and securing network traffic, offering real-time detection and analysis of anomalies through a combination of advanced machine learning techniques, a user-friendly interface, and flexible API integration.",
        links: ["https://github.com/timnirmal/talontech_ui"],
        images: ["https://zjvjdaqxzcircycxugjm.supabase.co/storage/v1/object/public/projects/p5-1.jpg"],
        // content: <DummyContent />,
    }
];

type CardType = {
    src: string;
    title: string;
    categories: string[];
    description: string;
    images: string[];
    links: string[];
};

export const ProjectHighlights = () => {
    const normalizedData: CardType[] = data.map(item => ({
        src: item.src,
        title: item.title,
        categories: item.categories || (Array.isArray(item.category) ? item.category : [item.category]), // Normalize to categories array
        description: item.description,
        images: item.images || [],
        links: item.links || [],
    }));

    const cards = normalizedData.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Project Highlights
            </h2>
            <Carousel items={cards}/>
        </div>
    );
};
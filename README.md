# Thief Detection Alarm

## Description

This project is a real-time object detection system that uses a webcam to identify people and trigger an alarm. It's built with React and utilizes TensorFlow.js for machine learning capabilities. The system is designed to detect human presence and play an audio alert when a person is identified in the video feed.

## Technologies Used

- React
- Next.js
- TensorFlow.js
- COCO-SSD (Common Objects in Context - Single Shot Detector) model

## Key Features

1. Real-time object detection using webcam feed
2. Visual bounding boxes around detected objects
3. Special highlighting for detected persons
4. Audio alarm when a person is detected
5. Responsive design for various screen sizes

## Components

### ObjectDetection

The main component that handles the webcam feed and object detection logic.

- Uses `useRef` for accessing the webcam and canvas elements
- Implements `useEffect` for initializing the detection process
- Manages loading state for the AI model

### renderPredictions

A utility function that draws bounding boxes and labels on the canvas for detected objects.

- Distinguishes between person and non-person objects with different colors
- Triggers audio playback when a person is detected

## How It Works

1. The application loads the COCO-SSD model using TensorFlow.js
2. Once loaded, it continuously captures frames from the webcam
3. Each frame is processed by the model to detect objects
4. Detected objects are rendered on a canvas overlay
5. If a person is detected, a red bounding box is drawn, and an audio alarm is triggered

## Performance Optimization

- The audio playback is throttled using lodash to prevent excessive triggering

## UI/UX

- Clean, dark-themed interface
- Gradient text for the title
- Loading indicator while the AI model is being initialized

## Future Improvements

- Add ability to customize detection sensitivity
- Implement multiple camera support
- Create a mobile app version
- Integrate with home security systems

This project demonstrates the power of combining web technologies with machine learning to create practical, real-time applications for enhanced security and monitoring.

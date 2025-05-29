# AI Summarizer Prototype

A lightweight React application to simulate an AI notes summarizer. This project is for the Turnberry Solutions Assessment.

---

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ai-summarizer.git
cd ai-summarizer
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run development server locally

```bash
npm run dev
# or
yarn dev
```

## My approach

1. First I started by creating a basic input and button. So onClick(), the button will trigger a basic timeout function
2. From there, I needed the timeout to display an animation which simulates loading for an API call. This is also where I’m setting state in the handleSummarize() function.
3. Next, I needed to actually inject the summary into a panel below the input. After the timeout is complete, it will conditionally render a random summary display from a mock data array. 
4. With the main functionality complete, I added a clear notes button for a better UX along with some transitions for a UI garnish.
5. Aside from everything else, I separated some components into their own files for reusability. I would do this for an actual AI API call but instead I kept the timeout function in <App/> for simplicity of the assessment.
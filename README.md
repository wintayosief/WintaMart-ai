<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app https://ai.studio/apps/drive/1t4DZfIZ5EMmNZEKYX9aSouJPkP-ZXqgV
Multi-Agent Swarm Assignment


Here is my app in AI Studio With 4 Multi Agents 
AI-Powered Grocery Supermarket (Smart Food Store)

I Chosen Use Case & Rationale

The system is a Smart Food Store where a personal AI swarm assists shoppers inside a grocery supermarket. Instead of one large AI, the system uses multiple specialized agents that collaborate to help customers find products, plan meals, choose healthy options, and get the best prices.
This approach mirrors real supermarket staff roles and demonstrates how multi-agent systems improve accuracy, transparency, and scalability compared to a single agent.

Here are Personal Swarm: Four Experts, One Goal
1.Navigator (Sage) – Store Intelligence Agent
Role:
Expert in store layout and live stock levels Knows aisle locations, availability, and restocking status

Example tasks:
“Where can I find sugar?”
“Is cooking oil still in stock?”

2️. Chef (Zest) – Recipe & Meal Planning Agent

Role:
Suggests recipes based on available products Recommends flavor pairings

Example tasks:

“What can I cook with rice and beans?”
“Suggest a quick dinner idea.”

3️. Health (Bloom) – Nutrition & Wellness Agent

Role:
Acts as a nutritionist/dietitian Advises on healthy food choices

Example tasks:

“Is this meal healthy?”
“Recommend low-sugar options.”

4️. Sales (Maya) – Deals & Value Agent

Role:
Finds best prices, discounts, and promotions Maximizes customer value

Example tasks:
“Which milk is cheapest?”
“Are there any offers today?”

 Supervisor / Orchestrator Agent
Supervisor Agent

Responsibilities: Receives the user query. Decides which agent(s) should act Controls conversation flow Stops execution when goal is achieved
Requests human approval for sensitive actions (e.g., bulk orders)

 and here is the Agent Communication Flow (Diagram – Text)
 
 
User Query

   ↓
Supervisor Agent

   ↓
   
 ┌───────────────┬───────────────┬───────────────┬───────────────┐
 │ Navigator     │ Chef          │ Health        │ Sales         │
 │ (Sage)        │ (Zest)        │ (Bloom)       │ (Maya)        │
 └───────────────┴───────────────┴───────────────┴───────────────┘
   ↓
   
Shared Memory (context, stock, preferences)
   ↓
   
Critique / Reflection Agent
   ↓
   
Final Response to User





 Required Technical Elements (Mapped Clearly)
✅ Open-Source Multi-Agent Framework

OpenAI Swarm (lightweight, experimental)

Alternative mention: CrewAI / AutoGen (for discussion)

✅ Shared State / Memory

Stored information includes:

User preferences (budget, diet)

Query history

Agent findings (stock, recipes, deals)

Example:

SharedMemory = {
  "user_budget": "low",
  "diet": "low sugar",
  "items_checked": ["sugar", "milk"]
}

✅ Tool Integration (2–3 tools)

Inventory Lookup Tool

Simulates database queries (stock, price, aisle)

Calculator Tool

Computes total cost, discounts, comparisons

Recipe / File Reader Tool

Reads stored recipe files or nutrition tables

✅ Human-in-the-Loop Capability

Supervisor pauses and asks:

“This order exceeds your budget. Do you want to proceed?”

Execution continues only after user approval.

✅ Reflection / Critique Loop

A Critic Agent reviews outputs:

Checks for incorrect prices

Ensures health advice is reasonable

Flags inconsistencies

Example:

“Health agent confirms this recipe is suitable for low-sugar diets.”

✅ Streaming of Agent Actions

System displays:

Which agent is working What decision is being made, Intermediate outputs (for transparency)

✅ Termination Conditions

The system stops when: User goal is achieved Maximum agent turns reached

User cancels the request

🧪 Example Interaction Transcript (Short)

User:

“I want a healthy, affordable dinner.”

Supervisor:

Assigns Chef, Health, and Sales agents

Chef (Zest):

Suggests rice, beans, and vegetables

Health (Bloom):

Confirms meal is balanced and low-fat

Sales (Maya):

Finds discount on vegetables today

Critic Agent:

Confirms consistency and accuracy

Final Output:

“You can cook rice and beans with vegetables. It’s healthy and costs KES 280.”


🧾 Here is Reflection Report (2–3 Paragraphs)

Advantages of Multi-Agent Approach:
Using multiple agents allowed the system to divide complex tasks into specialized roles. Each agent focused on a specific responsibility—navigation, cooking, health, or pricing—resulting in more accurate and relevant responses. This modular design reduced hallucinations and improved reasoning quality compared to a single agent handling all tasks.

Additionally, the supervisor agent improved coordination and ensured that only relevant agents were activated. The reflection loop added reliability by allowing one agent to critique others before responding to the user. Overall, the multi-agent approach increased transparency, scalability, and real-world applicability, making it more suitable for complex environments like a supermarket.: https://ai.studio/apps/drive/1t4DZfIZ5EMmNZEKYX9aSouJPkP-ZXqgV

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

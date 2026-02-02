# Running the Todo Application

## Prerequisites
- Python 3.9+ installed
- Node.js 18+ installed
- PostgreSQL database (Neon DB configured)

## Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Make sure your .env file is configured with the correct database URL:
   ```
   DATABASE_URL=postgresql://neondb_owner:npg_8MVpiOSh7CgU@ep-little-lake-a7iuixmj-pooler.ap-southeast-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require
   ```

4. Start the backend server:
   ```bash
   # On Windows
   .\start.bat

   # Or manually
   uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
   ```

## Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Accessing the Application
- Backend API: http://127.0.0.1:8000
- Backend API Docs: http://127.0.0.1:8000/docs
- Frontend: http://localhost:3000

## Troubleshooting
- Make sure the backend is running before starting the frontend
- Verify your database connection string is correct
- Check that CORS settings allow communication between frontend and backend
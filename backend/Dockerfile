FROM python:3.12

# Set the working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install the required dependencies for the virtual environment
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY . .

# Expose the port the app runs on
EXPOSE 8000

ENV HOST 0.0.0.0

# Command to run the application
CMD ["uvicorn", "app.main:app", "--port", "8000", "--host", "0.0.0.0"]

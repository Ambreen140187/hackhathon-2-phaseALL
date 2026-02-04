from app.main import app
from fastapi.testclient import TestClient

def test_sign_up():
    client = TestClient(app)

    # Test sign-up
    response = client.post("/api/auth/sign-up", json={
        "email": "testuser@example.com",
        "name": "Test User",
        "password": "testpassword123"
    })

    print(f"Sign-up response status: {response.status_code}")
    print(f"Sign-up response: {response.text}")

if __name__ == "__main__":
    test_sign_up()
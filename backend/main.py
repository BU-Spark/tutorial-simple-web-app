from fastapi import FastAPI, Form
import urllib.parse
from unalix import clear_url, unshort_url
import logging

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/test/{input_val}")
def tester(input_val: str):
    return {"message": "test"}

@app.get("/users/{user_id}")
async def user(user_id: str):
    return {"user_id":user_id}

@app.post("/clean-url")
async def clean_url(dirty_url: str = Form(...)):
    """Unshorten and strip tracking info."""
    logging.info(dirty_url)
    dirty_url = urllib.parse.unquote(dirty_url)
    try:
        dirty_url = unshort_url(url=dirty_url)
    except:
        pass ## throw out error and continue
    logging.info(f'URL expanded: {dirty_url}')
    clean_url = clear_url(dirty_url)
    logging.info(f'URL clean: {clean_url}')
    return f"Original URL: {dirty_url}\nURL with tracking information removed \n{clean_url}"

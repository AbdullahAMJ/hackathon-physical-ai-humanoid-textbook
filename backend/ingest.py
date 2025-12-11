import os

# Define path to docs relative to this script
# script is in backend/, docs is in ../docs
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DOCS_DIR = os.path.join(BASE_DIR, "..", "docs")

def list_files():
    print(f"Scanning for markdown files in: {DOCS_DIR}")
    if not os.path.exists(DOCS_DIR):
        print("Docs directory not found.")
        return

    md_files = []
    for root, dirs, files in os.walk(DOCS_DIR):
        for file in files:
            if file.endswith(".md"):
                full_path = os.path.join(root, file)
                # print relative path for cleaner output
                rel_path = os.path.relpath(full_path, start=DOCS_DIR)
                print(f"Found: {rel_path}")
                md_files.append(full_path)
    
    print(f"\nTotal markdown files found: {len(md_files)}")

if __name__ == "__main__":
    list_files()


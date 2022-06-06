IMAGE_NAME := simple-app-backend
CONTAINER_FNAME := Containerfile

help:
	@echo "make podman-build - Build and locally tag a new image."
	@echo "make podman-build-force - Use a no-cache build"
	@echo "make podman-run the container and launch the fastapi server"
	@echo 'sample call -- http --form POST http://localhost:8000/clean-url dirty_url="https://googleads.g.doubleclick.net/pcs/click?xai=AKAOjstd9vt1QmRYK22anq30zhEZqnhyEHUNoWb99w3JulITYJKPBclz5H0oKNiw0itoxVXzPUYji96bdNgdrdoyXD6zadsUzUSz4okKYnF9DlP3O27HMAsYCIV2WLOxfj0RePYNEamUm4iHAdOHh4ge63pdmyQT8EgLxW9CHoPfoD1Q-yQfvZFM0ubJUivLj5djPfzIllcJGw5cukUE9dUMOv0s3B3aSHjvAW1WGBlhs_DifZHENQB8nBVjmtZdzEs06oxPvoEEpXSGYh2PfbPQ1gU445wVyJCf0OonCDVUp_Lt-xXV0Ea96ROhPBlGmzW2vWZsFe32TkTcZAsTpLxrSw&sai=AMfl-YRLYN40hf0gEHmVC9__PFDod7-TrzzL7Big-nOhoyKtNo8jqaBT3C-Q_TeWw1HS-a0habKvpV1boQY6prd00S37MkuDuEesSLZZOZ7I79xvxKGoqG1uIbvXQ0yW8U7f&sig=Cg0ArKJSzG7Ck_WPJx4D&fbs_aeid=[gw_fbsaeid]&adurl=https://courses.w3schools.com/browse/certifications&nm=2&nx=50&ny=-473&mb=2"'

podman-build:
	@podman build -t $(IMAGE_NAME) --file=$(CONTAINER_FNAME) .

podman-build-force:
	@podman pull ubi8
	@podman build  -t $(IMAGE_NAME) --file=$(CONTAINER_FNAME) --no-cache .

podman-run:
	@podman run -it --rm -p 8000:8000 -v ${PWD}:/opt/app:z $(IMAGE_NAME)

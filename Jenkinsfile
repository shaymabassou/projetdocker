pipeline {
    agent any

    environment {
        VETERINAIRE_IMAGE = "shayma420/veterinaire"
        FRONTEND_IMAGE = "shayma420/veterinairefrontend"
        DOCKER_REGISTRY_CREDENTIALS = 'docker-hub-credentials'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/shaymabassou/projetdocker.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    // Build backend image
                    docker.build("${VETERINAIRE_IMAGE}:${env.BUILD_ID}", "./veterinaire")
                    
                    // Build frontend image
                    docker.build("${FRONTEND_IMAGE}:${env.BUILD_ID}", "./veterinairefrontend")
                }
            }
        }

        stage('Scan Backend Image with Trivy') {
            steps {
                script {
                    sh """
                    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \\
                    -e TRIVY_TIMEOUT=10m \\
                    aquasec/trivy:latest image --exit-code 0 \\
                    --severity LOW,MEDIUM,HIGH,CRITICAL \\
                    ${VETERINAIRE_IMAGE}:${env.BUILD_ID}
                    """
                }
            }
        }

        stage('Scan Frontend Image with Trivy') {
            steps {
                script {
                    sh """
                    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \\
                    -e TRIVY_TIMEOUT=10m \\
                    aquasec/trivy:latest image --exit-code 0 \\
                    --severity LOW,MEDIUM,HIGH,CRITICAL \\
                    ${FRONTEND_IMAGE}:${env.BUILD_ID}
                    """
                }
            }
        }

        stage('Push Docker Images to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', DOCKER_REGISTRY_CREDENTIALS) {
                        // Push backend image
                        docker.image("${VETERINAIRE_IMAGE}:${env.BUILD_ID}").push()
                        docker.image("${VETERINAIRE_IMAGE}:${env.BUILD_ID}").push('latest')
                        
                        // Push frontend image
                        docker.image("${FRONTEND_IMAGE}:${env.BUILD_ID}").push()
                        docker.image("${FRONTEND_IMAGE}:${env.BUILD_ID}").push('latest')
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}

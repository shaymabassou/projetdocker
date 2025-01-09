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

        stage('Test Docker Access') {
            steps {
                script {
                    bat 'docker ps'
                }
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

        stage('Install Trivy') {
            steps {
                bat '''
                curl -LO https://github.com/aquasecurity/trivy/releases/latest/download/trivy_Windows-64bit.zip
                powershell Expand-Archive -Path trivy_Windows-64bit.zip -DestinationPath C:\\Trivy
                set PATH=%PATH%;C:\\Trivy
                trivy --version
                '''
            }
        }

        stage('Check Trivy Installation') {
            steps {
                bat 'trivy --version'
            }
        }

        stage('Scan Vulnerabilities with Trivy') {
            steps {
                script {
                    // Scan backend image
                    bat "trivy image --exit-code 1 --severity HIGH ${VETERINAIRE_IMAGE}:${BUILD_ID} || exit /b 0"
                    
                    // Scan frontend image
                    bat "trivy image --exit-code 1 --severity HIGH ${FRONTEND_IMAGE}:${BUILD_ID} || exit /b 0"
                }
            }
        }

        stage('Push Docker Images to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', DOCKER_REGISTRY_CREDENTIALS) {
                        // Push backend image
                        docker.image("${VETERINAIRE_IMAGE}:${BUILD_ID}").push()
                        docker.image("${VETERINAIRE_IMAGE}:${BUILD_ID}").push('latest')
                        
                        // Push frontend image
                        docker.image("${FRONTEND_IMAGE}:${BUILD_ID}").push()
                        docker.image("${FRONTEND_IMAGE}:${BUILD_ID}").push('latest')
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

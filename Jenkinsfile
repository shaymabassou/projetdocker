pipeline {
    agent any

    environment {
        VETERINAIRE_IMAGE = "bassouchaima/veterinaire"
        FRONTEND_IMAGE = "bassouchaima/veterinairefrontend"
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

        stage('Test Trivy') {
            steps {
                sh 'trivy --version'
            }
        }

        stage('Scan Vulnerabilities with Trivy') {
            steps {
                script {
                    // Scan backend image
                    sh "trivy image --exit-code 1 --severity HIGH ${VETERINAIRE_IMAGE}:${env.BUILD_ID}"
                    
                    // Scan frontend image
                    sh "trivy image --exit-code 1 --severity HIGH ${FRONTEND_IMAGE}:${env.BUILD_ID}"
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

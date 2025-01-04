pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "shayma420/veterinaire"
        DOCKER_IMAGE = "shayma420/veterinairefrontend"
        DOCKER_REGISTRY_CREDENTIALS = 'docker-hub-credentials'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/shaymabassou/Projet-Docker.git'
            }git init

        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${env.BUILD_ID}")
                }
            }
        }

        agent any
    stages {
        stage('Test Trivy') {
            steps {
                sh 'trivy --version'
            }
        }
    }

        stage('Scan Vulnerabilities with Trivy') {
            steps {
                sh 'trivy image --exit-code 1 --severity HIGH ${DOCKER_IMAGE}:${env.BUILD_ID} || true'
            }
        }

        stage('Push Docker Image to Docker Hub') {
            when {
                expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' }
            }
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image("${DOCKER_IMAGE}:${env.BUILD_ID}").push('latest')
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

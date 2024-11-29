pipeline {
    agent any
    tools {nodejs "NODEJS"}
    environment {
        imageName = 'aml-mvp/react-app'
        registryCredentails = 'mohan-2114'
        dockerImage = ''
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        // stage('Run Tests') {
        //     steps {
        //         sh 'npm test'
        //     }
        // }
        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Buliding Image') {
            steps {
                script {
                    dockerImage = docker.build imageName
                }
            }
        }
        stage ("Deploy Image") {
            steps {
                script {
                    docker.withResgistry("https://registry.hub.docker.com", "dockerhub-cred") {
                        dockerImage.push("${env.BUILD_NUMBER}")
                    }
                }
            }
        }
    }
}
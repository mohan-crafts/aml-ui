pipeline {
    agent any
    tools {nodejs "NODEJS"}
    environment {
        imageName = 'mohan2114/react-app'
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
        // stage('Build App') {
        //     steps {
        //         sh 'npm run build'
        //     }
        // }

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
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-cred') {
                        dockerImage.push()
                    }
                    // docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-cred') {
                    // dockerImage = docker.build("my-image:${env.BUILD_ID}")
                    // /* Push the container to the custom Registry */
                    // dockerImage.push()
                // }
                }
            }
        }
    }
}
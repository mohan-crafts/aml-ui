pipeline {
    agent any
    tools {nodejs "NODEJS"}
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        // stage('Build App') {
        //     steps {
        //         sh 'npm run build'
        //     }
        // }
    }
}
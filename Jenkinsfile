pipeline { 
    agent any 
   
    stages {
         
        stage('Build Image') {
            steps {
                bat 'docker build -t oomkar/asos_wdio . '
            }
        }
        stage('Push Image') {
            steps {
			        bat 'docker push oomkar/asos_wdio:latest'
			    }                           
            }
        
        stage('Docker base image- checking for latest') {
            steps {
                bat 'docker pull oomkar/asos_wdio' 
            }
        }
        stage('Build - Set up GRID') { 
             
            steps { 
                bat 'docker-compose up -d selenium-hub chrome-dbug firefox-dbug' 
            }
        }   
        stage('Test - Run Automated Tests'){
            steps {
               bat 'docker-compose up asos-wdio-framework' 
            }
        }
        stage('Shutdown - Grid down') {
         
            steps {
                bat 'docker-compose down' 
                  }
            }                                   
        } 
    }
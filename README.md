"# Projet-Docker" 
Documentation  : Conteneurisation, CI/CD et Déploiement Kubernetes
3.2. Conteneurisation
Pour conteneuriser l'application :

Chaque service ou composant dispose d'un fichier Dockerfile spécifique pour définir son environnement et son exécution.
Un fichier docker-compose.yml est utilisé pour orchestrer et tester l'ensemble des services en local.
3.3. Intégration Continue avec Jenkins
Un pipeline Jenkins est mis en place pour automatiser le processus CI/CD :

Étape 1 : Build : Construction des images Docker à partir des Dockerfile.
Étape 2 : Scan des vulnérabilités : Utilisation de Trivy pour détecter les éventuelles failles de sécurité dans les images.
Étape 3 : Push sur Docker Hub : Les images validées sont envoyées sur un registre Docker.
3.4. Cluster Kubernetes Local
Pour déployer l'application :

Un cluster Kubernetes local Minikube est configuré pour les tests.
Les manifestes Kubernetes (Deployments, Services, ConfigMap, etc.) sont appliqués pour gérer les ressources.
Helm Charts sont utilisés pour simplifier la gestion des déploiements.
ArgoCD est intégré pour une stratégie GitOps, synchronisant automatiquement le code avec l'état du cluster.
3.5. Monitoring et Observabilité
Un système de monitoring est mis en place pour superviser l'application et le cluster :
-Prometheus collecte les métriques du cluster et des services.
-Grafana est utilisé pour afficher ces métriques via des tableaux de bord personnalisés, offrant une visualisation claire des performances et de la santé globale du système.
Objectif Final
*Ces étapes garantissent une application conteneurisée, testée, sécurisée, et déployée sur Kubernetes avec une gestion centralisée et un monitoring efficace.

<img width="957" alt="1" src="https://github.com/user-attachments/assets/a5c73ca3-11f5-4814-910a-81073dad6490" />

<img width="960" alt="2" src="https://github.com/user-attachments/assets/9a76e7fd-d909-40c5-9925-40ba57177f60" />

<img width="960" alt="3" src="https://github.com/user-attachments/assets/bfc8682e-8950-40c2-8dd6-3551c01833fb" />

<img width="960" alt="4" src="https://github.com/user-attachments/assets/ed557394-7a46-4435-902d-bfe2b349d64c" />

![IMG_8887](https://github.com/user-attachments/assets/d7e6b447-d9bb-4714-99bf-b369adc8db78)








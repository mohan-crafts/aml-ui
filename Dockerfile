# Use an official Node runtime as a parent image
FROM jenkins/jenkins:lts
USER root
RUN apt-get update

RUN curl -sSL https://get.docker.com/ | sh


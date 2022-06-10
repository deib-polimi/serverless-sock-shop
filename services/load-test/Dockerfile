FROM python:3.8-slim

# Install locust
RUN pip install pyzmq locust faker

ADD locustfile.py /config/locustfile.py
ADD runLocust.sh /usr/local/bin/runLocust.sh

ENV LOCUST_FILE /config/locustfile.py

EXPOSE 8089

# ENTRYPOINT ["/usr/local/bin/runLocust.sh"]
CMD ["/bin/sh","-c","trap : TERM INT; sleep 9999999999d & wait"]
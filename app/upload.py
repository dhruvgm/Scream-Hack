# -*- coding: utf-8 -*-
import os
import hashlib
import pprint

from botr.api import API

pp = pprint.PrettyPrinter()

# Please update kkkk with your key and ssss with your secret
api = API('kkkkkkkk', 'ssssssssssssssssssssssss')

base_dir = u'./'
file_name = u'test.mp4'

file_path = os.path.join(base_dir, file_name)
# file_size and file_md5 are optional
file_size = os.path.getsize(file_path)
file_md5 = hashlib.md5(open(file_path, 'rb').read()).hexdigest()

call_params = {
    'title': 'New test video',
    'tags': 'new, test, video, upload',
    'description': 'New video',
    'link': 'http://www.bitsontherun.com',
    'author': 'Bits on the Run',
}

response = api.call('/videos/create', call_params, verbose=True)
pp.pprint(response)

if response['status'] == 'ok':
    upload_params = response['link']
    upload_params['query']['file_size'] = file_size
    upload_params['query']['md5'] = file_md5

    response = api.upload(upload_params, file_path, verbose=True)
    pp.pprint(response)
else:
    print "API call /videos/create has failed!"
    pp.pprint(response)


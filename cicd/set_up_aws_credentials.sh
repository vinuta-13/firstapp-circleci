#!/usr/bin/env bash

set -o errexit -o pipefail

mkdir -p ~/.aws

if [[ -n ${TEST_AWS_ACCESS_KEY_ID	} && -n ${TEST_AWS_SECRET_KEY}  ]]; then
    cat <<EOF >> ~/.aws/credentials
[grafo-naksha/test]
aws_access_key_id=${TEST_AWS_ACCESS_KEY_ID	}
aws_secret_access_key=${TEST_AWS_SECRET_KEY}
EOF
fi
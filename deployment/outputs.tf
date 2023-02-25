output "node_api_private_ip" {
  value = aws_instance.node_api_instance_nginx.public_ip
}

output "bucket_url" {
  value = aws_s3_bucket_website_configuration.react_app.website_endpoint
}
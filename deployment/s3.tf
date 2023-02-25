
variable "bucket_name" {
  default = "tennis-player-stats-bucket"
}

resource "aws_s3_bucket" "react_app" {
  bucket = var.bucket_name
}

resource "aws_s3_bucket_acl" "react_app" {
  bucket = aws_s3_bucket.react_app.id
  acl    = "public-read"
}

resource "aws_s3_bucket_versioning" "react_app" {
  bucket = aws_s3_bucket.react_app.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_policy" "react_app" {
  bucket = aws_s3_bucket.react_app.id
  policy = data.aws_iam_policy_document.allow_public_access.json
}

data "aws_iam_policy_document" "allow_public_access" {
  statement {
    principals {
      identifiers = ["*"]
      type        = "*"
    }

    actions = [
      "s3:GetObject"
    ]

    resources = [
      "${aws_s3_bucket.react_app.arn}/*",
    ]
  }
}

resource "aws_s3_bucket_website_configuration" "react_app" {
  bucket = aws_s3_bucket.react_app.bucket

  index_document {
    suffix = "index.html"
  }
}

/*
resource "aws_s3_object" "index_page" {
  bucket = aws_s3_bucket.react_app.id
  key = "index.html"
  content_type = "text/html; chartset=UTF-8"
  source = "index.html"
  etag = filemd5("index.html")
}
*/
Table provider {
    id int [pk]
    name varchar(255) 
    img_url mediumtext
    description longtext
    english_support boolean
    site_url mediumtext
}
Table review_detail {
    id int [pk]
    provider_id provider_id [ref: - provider.id]
    reviewer_name varchar(255)
    email varchar(255)
    overall int
    ease_of_use int
    coverage int
    price int
    customer_service int
    customer_review longtext
}


const label = {
    "available": true,
    "plugin_title": "WPLoyalty - Points, Rewards and Referral for WooCommerce",
    "version": "1.0.6",
    "common": {
        "action_types": {
            "point_for_purchase": "Points For Purchase",
            "subtotal": "Reward based on spending",
            "purchase_histories": "Order Goals",
            "signup": "Sign Up",
            "product_review": "Write a review",
            "birthday": "Birthday",
            "facebook_share": "Facebook Share",
            "twitter_share": "Twitter Share",
            "whatsapp_share": "WhatsApp Share",
            "email_share": "Email Share",
            "referral": "Referral"
        },
        "unlimited": "Unlimited",
        "no_expire": "No expiry email",
        "active": "Active",
        "in_active": "InActive",
        "disabled": "Disabled",
        "edit": "Edit",
        "delete": "Delete",
        "adjust_value": "Adjust Value",
        "hide": "Hide",
        "show": "Show",
        "advanced_settings": "Advanced Settings",
        "select_conditions": "Select conditions",
        "no_conditions": "No conditions found",
        "conditions": "Conditional Rules (Optional)",
        "and": "and",
        "or": "or",
        "match_all": "Match All",
        "match_any": "Match Any",
        "add_condition": "Add Conditions",
        "back": "Back",
        "close": "Close",
        "save": "Save",
        "save_close": "Save & Close",
        "cancel": "Cancel",
        "premium": "Upgrade to Premium",
        "premium_msg": "This feature is only available for premium users",
        "invalid_date": "Invalid Date",
        "check_here": "Check Here",
        "reward_used": "Can't edit Reward is Used.",
        "reward_expired": "Can't edit Reward is Expired.",
        "reward_unlimited": "Can't edit, This reward has unlimited expiry.",
        "documentation": "Documentation",
        "search": "Search",
        "select": {
            "reward_point": "Reward for Points",
            "reward_coupon": "Reward as a coupon immediately",
            "this_month": "This Month",
            "last_month": "Last Month",
            "ninety_days": "90 Days",
            "last_year": "Last Year",
            "custom": "Custom",
            "days": "Day(s)",
            "weeks": "Week(s)",
            "months": "Month(s)",
            "years": "Year(s)",
            "point_txt": "Points",
            "coupon_txt": "Coupon reward",
            "on_their_birthday": "On their birthday",
            "when_providing_birthday": "When providing birthday date",
            "fixed_point": "Fixed Points",
            "sub_percentage": "Percentage based on subtotal",
            "all": "Both list and single product pages",
            "hide": "Hide the message",
            "list": "Product List Pages only",
            "single": "Single Product Pages only",
            "yes": "Yes",
            "no": "No",
            "in_list": "In list",
            "not_in_list": "Not in list",
            "less_than": "Less then",
            "less_than_or_equal": "Less than or equal",
            "greater_than_or_equal": "Greater than or equal",
            "greater_than": "Greater than",
            "all_item_count": "All item count",
            "all_item_qty": "All item quantity",
            "each_item_qty": "Each item quantity",
            "all_item_weight": "All item weight",
            "each_item_weight": "Each item weight",
            "round": "Round to nearest integer",
            "round_floor": "Always round down",
            "ceil": "Always round up",
            "no_icon": "No Icon",
            "position_floor": "Icon display before label",
            "type_instruction": "Please enter 2 or more character",
            "search_products": "Search Products...",
            "no_products": "No Products Available",
            "search_customers": "Search Customers...",
            "no_customers": "No Customers Available",
            "search_product_attributes": "Search Product Attributes...",
            "no_product_attributes": "No Product Attributes Available",
            "search_product_tags": "Search Product tags...",
            "no_product_tags": "No Product tags Available",
            "search_product_categories": "Search Product categories...",
            "no_product_categories": "No Product categories Available",
            "search_product_sku": "Search Product SKU...",
            "no_product_sku": "No Product SKU Available",
            "select_coupon": "Select Coupon.."
        }
    },
    "conditions": {
        "user_role": {
            "name": "User Role",
            "condition": "User roles should be ",
            "role": "Select user role(s)"
        },
        "customer": {
            "name": "Customer",
            "condition": "Customers should be ",
            "customers": "Select customer(s)"
        },
        "language": {
            "name": "Language",
            "condition": "Select language"
        },
        "currency": {
            "name": "Currency",
            "condition": "Select currency"
        },
        "cart_subtotal": {
            "name": "Cart Subtotal",
            "value_condition": "Cart subtotal should be ",
            "value": "Cart subtotal amount"
        },
        "cart_line_item": {
            "name": "Cart Line Item Count",
            "condition": "Cart should be ",
            "value_condition": "Cart quantity should be ",
            "all_item_count": "All item count ",
            "all_item_quantity": "All item quantity",
            "each_item_quantity": "Each item quantity"
        },
        "cart_weight": {
            "name": "Cart Weight",
            "condition": "Cart should be ",
            "value_condition": "Cart weight should be ",
            "all_item_weight": "All item weight",
            "each_item_weight": "Each item weight"
        },
        "product": {
            "name": "Products",
            "condition": "Product should be ",
            "product": "Select Product(s) ",
            "value_condition": "Product(s) quantity should be ",
            "value": "Product(s) quantity"
        },
        "product_attributes": {
            "name": "Product Attributes",
            "condition": "Product attribute should be ",
            "product": "Select Product attribute(s) ",
            "value_condition": "Product attribute(s) quantity should be ",
            "value": "Product attribute(s) quantity"
        },
        "product_category": {
            "name": "Product Category",
            "condition": "Product category should be ",
            "product": "Select Product category(s) ",
            "value_condition": "Product category(s) quantity should be ",
            "value": "Product category(s) quantity"
        },
        "product_sku": {
            "name": "Product SKU",
            "condition": "Product SKU should be ",
            "product": "Select Product SKU ",
            "value_condition": "Product SKU quantity should be ",
            "value": "Product SKU quantity"
        },
        "product_tag": {
            "name": "Product Tags",
            "condition": "Product tag should be ",
            "product": "Select Product tag(s) ",
            "value_condition": "Product tag(s) quantity should be ",
            "value": "Product tag(s) quantity"
        },
        "product_on_sale": {
            "name": "Product On Sale",
            "condition": "Product on sale should be "
        },
        "payment": {
            "name": "Payments",
            "condition": "Payment should be ",
            "payment": "Select payment method(s) "
        },
        "order_status": {
            "name": "Order Status",
            "condition": "Order status should be ",
            "status": "Select order status "
        },
        "purchase_history": {
            "name": "Purchase History",
            "condition": "Purchase history should be ",
            "value": "Purchase history value",
            "status": "Select purchase status "
        },
        "lifetime_sale_value": {
            "name": "Lifetime Sale Value",
            "condition": "Sale value should be ",
            "value": "Sale value",
            "status": "Sale value status "
        },
        "usage_limits": {
            "name": "Usage Limits",
            "value_condition": "Usage limits should be ",
            "value": "Usage limit"
        }
    },
    "dashboard": {
        "name": "Dashboard",
        "from_date": "From Date",
        "to_date": "To Date",
        "get_result": "Get Result",
        "reward": "Reward",
        "points": "Points",
        "revenue_txt": "Revenue",
        "no_of_orders": {
            "name": "Number Of Orders",
            "description": "Number of orders made by Loyalty customers."
        },
        "order_total": {
            "name": "Total value of Orders",
            "description": "Total value of the orders placed by Loyalty customers."
        },
        "tot_points": {
            "name": "Total points",
            "description": "Total number of points awarded to customers from all campaigns."
        },
        "tot_rewards": {
            "name": "Total Rewards",
            "description": "All claimed rewards by the customers."
        },
        "tot_rewards_redeemed": {
            "name": "Total value Redeemed",
            "description": "Includes the value of the total redeemed rewards."
        },
        "revenue": {
            "name": "Revenue",
            "description": "Revenue generated by customers in the loyalty rewards program."
        },
        "points_reward": {
            "name": "Points and Rewards",
            "description": "Points and rewards earned by customers"
        }
    },
    "manage_points": {
        "name": "Customers",
        "import_txt": "Import",
        "export_txt": "Export",
        "exported_txt": "Show Exported File",
        "add_new_customer_txt": "Add New customer",
        "no_customers": "No Customers to display",
        "customers": "customer(s)",
        "available_points": "Points",
        "earned_rewards": "Rewards Earned",
        "used_rewards": "Rewards Redeemed",
        "referral_url": "Referral URL",
        "referral_code": "Referral Code",
        "birthday": "Birthday",
        "search": "Search Customers..",
        "update": "Update",
        "progress": {
            "upload": "Upload",
            "preview": "Preview",
            "completed": "Completed",
            "next": "Next",
            "done": "Done",
            "total": "Total Items",
            "processed": "Processed Items",
            "field_value": "Field Value",
            "field_name": "Field Name",
            "link": "Link",
            "download": "Download"
        },
        "import": {
            "name": "Import Customers",
            "update_points": "Update the points when customer already exists",
            "records_per_batch": "How many records to import per batch",
            "drag_drop": "Drag and Drop or",
            "upload_data": "to upload your data",
            "choose_file": "Choose file",
            "choose_another_file": "Choose Another file",
            "replace": "to replace this file",
            "added": "Added"
        },
        "export": {
            "name": "Export Customers"
        },
        "exported": {
            "name": "Download Exports"
        },
        "add_new_customer": {
            "name": "Add New Customer",
            "email": {
                "name": "Email",
                "placeholder": "Enter customer Email here"
            },
            "points": "Points"
        },
        "user_details": {
            "name": "Point User Details",
            "customer_point_details": {
                "name": "Customer Point Details",
                "points_earned": "Points Earned",
                "rewards_earned": "Rewards Earned",
                "rewards_used": "Rewards Used",
                "revenue": "Revenue"
            },
            "customer_details": {
                "name": "Customer Details",
                "email": "Email",
                "referral_code": "Referral Code"
            },
            "transaction": {
                "name": "Transaction Details",
                "no_transaction": "No Transactions Available",
                "sno": "S.No.",
                "order_no": "Order No.",
                "purchase_value": "Purchase Value",
                "action_name": "Action Name",
                "points_earned": "Points Earned",
                "rewards_earned": "Rewards Earned"
            },
            "reward": {
                "name": "Reward Details",
                "sno": "S.No.",
                "reward_name": "Reward Name",
                "code": "Reward Code",
                "reward_status": "Status",
                "expiry": "Expiry",
                "expiry_date": "Expiry Date",
                "expiry_email": "Expiry Email",
                "no_reward": "No Rewards Claimed"
            },
            "activity": {
                "name": "Activity",
                "no_activity": "No Activities found"
            }
        }
    },
    "earn_campaign": {
        "name": "Campaigns",
        "choose_campaign_button": "Choose",
        "add_new_campaign_button": "Choose your campaign type",
        "add_new_campaign_description": "You can reward customers for purchases, sign up, writing reviews, social sharing, referring their friends and more. Choose a type to get started. (You can create more than one reward campaign)",
        "empty_title": "Ready to launch your loyalty rewards program?",
        "empty_supporting_text": "Drive repeat purchases and build loyalty by rewarding your customers. Create a new campaign to get started",
        "no_campaign_title": "No campaigns found!",
        "no_campaign_text": "No campaigns found in this name, Create new campagin.",
        "add_this_campaign_button": "Create new campaign",
        "campaign_type": "Campaign Type",
        "search": "Search campagins..",
        "create_campaign": {
            "point_for_purchase": {
                "title": "Points for Purchase",
                "supporting_text": "Reward customers for their purchases. Example:  10 points for every $100 spent in the store."
            },
            "subtotal": {
                "title": "Reward based on spending",
                "supporting_text": "Let customers earn points or rewards for their spending. Example: Spend $100 and get 100 points or $10 reward. This helps you increase average order value."
            },
            "order_goals": {
                "title": "Order Goals",
                "supporting_text": "Drive repeat purchases by rewarding customers. Example: $100 reward for customers who placed 10 or more orders."
            },
            "birthday": {
                "title": "Birthday",
                "supporting_text": "Reward customers for sharing their date of birth with you. This will help you offer special offers on their birthday."
            },
            "referral": {
                "title": "Referral",
                "supporting_text": "Reward customers for referring their friends to your store. Turn your customers into brand advocates by launching a Referral / Refer-a-friend campaign."
            },
            "signup": {
                "title": "Sign Up",
                "supporting_text": "Reward customers for creating / registering an account with your store.  Useful to turn visitors into loyal customers."
            },
            "review": {
                "title": "Write a review",
                "supporting_text": "Reward customers when they write a review for a product they purchased. This increases the social proof for your store and grows revenue."
            },
            "facebook": {
                "title": "Facebook Share",
                "supporting_text": "Reward customers for sharing your store / products in Facebook. This helps you boost sales through more social media visibility and proof."
            },
            "twitter": {
                "title": "Twitter Share",
                "supporting_text": "Reward customers for sharing your store / products in Twitter. This helps you boost sales through more social media visibility and proof."
            },
            "whatsapp": {
                "title": "WhatsApp Share",
                "supporting_text": "Let customers share your products via WhatsApp. Reward them for sharing."
            },
            "email": {
                "title": "Email Share",
                "supporting_text": "Reward customers for sharing your products via Email or referring their friends to your store via email."
            }
        },
        "point_for_purchase": {
            "name": {
                "name": "Point for purchase",
                "placeholder": "Give a name to your Campaign"
            },
            "description": {
                "name": "Description",
                "description": "A description for your reference",
                "placeholder": "Give a description to your Campaign"
            },
            "set_points": {
                "name": "Customer earns points",
                "description": "Example: Reward customers with 1 point for every $1 spent on purchases."
            },
            "for_each_price": {
                "name": "For every X amount spent"
            },
            "minimum_points": {
                "name": "Minimum points a customer can earn for each order (optional)",
                "description": "Optional. You can set a minimum number of points to be awarded for each order."
            },
            "maximum_points": {
                "name": "Maximum Points a customer can earn for each order (optional)",
                "description": "Optional. You can set a maximum number of points to be awarded for each order."
            },
            "start_date": {
                "name": "Campaign Start date"
            },
            "end_date": {
                "name": "Campaign End date"
            },
            "message_box": {
                "name": "Message to show in product pages",
                "description": "(Display a message on points in the product page so that the customer knows about the reward)"
            },
            "show_message_in": {
                "name": "Where to show the message?"
            },
            "single_product_message": {
                "name": "Message for simple products"
            },
            "variable_product_message": {
                "name": "Message for variable products"
            },
            "text_color": {
                "name": "Text Color"
            },
            "background_color": {
                "name": "Background Color"
            },
            "border_color": {
                "name": "Border Color"
            },
            "rounded_edge": {
                "name": "Rounded Edge"
            }
        },
        "subtotal": {
            "name": {
                "name": "Reward based on spending",
                "placeholder": "Give a name to your Campaign"
            },
            "description": {
                "name": "Description",
                "description": "Add some description to this campaign",
                "placeholder": "Give a description to your Campaign"
            },
            "set_points": {
                "name": "Set points",
                "description": "Set the number of points to be awarded"
            },
            "what_kind_of_reward": {
                "name": "Choose the type of reward",
                "description": "The reward can be either points or a discount reward.  The discount reward will be automatically created and awarded to the customers as soon as he meets this campaign eligibility."
            },
            "choose_coupon": {
                "name": "Choose the coupon reward",
                "description": "Make sure you created the reward at the Rewards section."
            },
            "minimum_subtotal": {
                "name": "Minimum spend",
                "description": "How much a customer should spend in an order (cart subtotal) to get this reward ? Default: 0"
            },
            "maximum_subtotal": {
                "name": "Maximum spend",
                "description": "The maximum amount a customer can  spend in an order (cart subtotal) to get this reward ? Leave as 0 for no limit."
            },
            "start_date": {
                "name": "Campaign Start date"
            },
            "end_date": {
                "name": "Campaign End date"
            }
        },
        "order_goals": {
            "name": {
                "name": "Number of Goal Purchase",
                "placeholder": "Give a name to your Campaign"
            },
            "description": {
                "name": "Description",
                "description": "Add some description to this campaign",
                "placeholder": "Give a description to your Campaign"
            },
            "set_points": {
                "name": "Set points",
                "description": "Points to be earned by this campaign"
            },
            "what_kind_of_reward": {
                "name": "Choose the type of reward",
                "description": "The reward can be either points or a discount reward.  The discount reward will be automatically created and awarded to the customers as soon as he meets this campaign eligibility."
            },
            "choose_coupon": {
                "name": "Choose the coupon reward",
                "description": "Make sure you created the reward at the Rewards section."
            },
            "set_goal": {
                "name": "Number of orders required",
                "description": "How many orders a customer should have to claim this reward?"
            },
            "minimum_order": {
                "name": "Minimum spend value for each order",
                "description": "Minimum value of each order."
            },
            "start_date": {
                "name": "Campaign Start date"
            },
            "end_date": {
                "name": "Campaign End date"
            }
        },
        "referral": {
            "name": {
                "name": "Referral Campaign",
                "placeholder": "Give a name to your Campaign"
            },
            "description": {
                "name": "Description",
                "description": "Add some description to this campaign",
                "placeholder": "Give a description to your Campaign"
            },
            "what_kind_of_reward": {
                "name": "Choose the type of reward",
                "description": "The reward can be either points or a discount reward.  The discount reward will be automatically created and awarded to the customers as soon as he meets this campaign eligibility. "
            },
            "choose_coupon": {
                "name": "Choose the coupon reward",
                "description": "Make sure you created the reward at the Rewards section."
            },
            "point_type": {
                "name": "Point Reward Type",
                "description": "Select the type of the points to be rewarded."
            },
            "set_points": {
                "name": "Set points",
                "description": "Points to be earned by this campaign."
            },
            "set_percentage": {
                "name": "Set percentage",
                "description": "Enter the percentage of points to be earned based on the subtotal. Example: 10%.  if customer spends $100, then he will be awarded 10 percentage of $100, which is 10 points"
            },
            "start_date": {
                "name": "Campaign Start date"
            },
            "end_date": {
                "name": "Campaign End date"
            },
            "existing": {
                "name": "Existing Customer"
            },
            "new": {
                "name": "New Customer / Referred Person / Friend Reward"
            }
        },
        "signup": {
            "name": {
                "name": "Sign Up campaign",
                "placeholder": "Give a name to your Campaign"
            },
            "description": {
                "name": "Description",
                "description": "Add some description to this campaign",
                "placeholder": "Give a description to your Campaign"
            },
            "what_kind_of_reward": {
                "name": "Choose the type of reward",
                "description": "The reward can be either points or a discount reward.  The discount reward will be automatically created and awarded to the customers as soon as he meets this campaign eligibility. "
            },
            "choose_coupon": {
                "name": "Choose the coupon reward",
                "description": "Make sure you created the reward at the Rewards section."
            },
            "set_points": {
                "name": "Set points",
                "description": "Points to be earned by this campaign."
            },
            "message": {
                "name": "Message to display on the Account Creation / Sign up page",
                "description": "You can show this message at the account registration / creation page or at the account creation section in checkout page. Shortcode reference: {wlr_points} - Points the customer can earn. {wlr_points_label}  - The description"
            },
            "start_date": {
                "name": "Campaign Start date"
            },
            "end_date": {
                "name": "Campaign End date"
            }
        },
        "review": {
            "name": {
                "name": "Review campaign",
                "placeholder": "Give a name to your Campaign"
            },
            "description": {
                "name": "Description",
                "description": "Add some description to this campaign",
                "placeholder": "Give a description to your Campaign"
            },
            "what_kind_of_reward": {
                "name": "Choose the type of reward",
                "description": "The reward can be either points or a discount reward.  The discount reward will be automatically created and awarded to the customers as soon as he meets this campaign eligibility. "
            },
            "choose_coupon": {
                "name": "Choose the coupon reward",
                "description": "Make sure you created the reward at the Rewards section."
            },
            "set_points": {
                "name": "Set points",
                "description": "Points to be earned by this campaign."
            },
            "message": {
                "name": "Message to display on the product reviews section of your store.",
                "description": "You can show this message at the product reviews section. Shortcode reference: {wlr_points} - Points the customer can earn. {wlr_points_label}  - The description"
            },
            "start_date": {
                "name": "Campaign Start date"
            },
            "end_date": {
                "name": "Campaign End date"
            }
        },
        "birthday": {
            "name": {
                "name": "Birthday Campaign",
                "placeholder": "Give a name to your Campaign"
            },
            "description": {
                "name": "Description",
                "description": "Add some description to this campaign",
                "placeholder": "Give a description to your Campaign"
            },
            "what_kind_of_reward": {
                "name": "Choose the type of reward",
                "description": "The reward can be either points or a discount reward.  The discount reward will be automatically created and awarded to the customers as soon as he meets this campaign eligibility. "
            },
            "choose_coupon": {
                "name": "Choose the coupon reward",
                "description": "Make sure you created the reward at the Rewards section."
            },
            "set_points": {
                "name": "Set points",
                "description": "Points to be earned by this campaign."
            },
            "apply_reward_event": {
                "name": "When this reward be given ?",
                "description": "Select the event to apply reward."
            },
            "message": {
                "name": "Message to show customers",
                "description": "The message shows on the Customer Reward page."
            },
            "start_date": {
                "name": "Campaign Start date"
            },
            "end_date": {
                "name": "Campaign End date"
            }
        },
        "facebook": {
            "name": {
                "name": "Facebook Share",
                "placeholder": "Give a name to your Campaign"
            },
            "description": {
                "name": "Description",
                "description": "Add some description to this campaign",
                "placeholder": "Give a description to your Campaign"
            },
            "what_kind_of_reward": {
                "name": "Choose the type of reward",
                "description": "The reward can be either points or a discount reward.  The discount reward will be automatically created and awarded to the customers as soon as he meets this campaign eligibility. "
            },
            "choose_coupon": {
                "name": "Choose the coupon reward",
                "description": "Make sure you created the reward at the Rewards section."
            },
            "set_points": {
                "name": "Set points",
                "description": "Points to be earned by this campaign."
            },
            "message": {
                "name": "Share Message",
                "description": "Enter a text that can be shared by the customer in the social media. Customers can alter this text before they share. "
            },
            "start_date": {
                "name": "Campaign Start date"
            },
            "end_date": {
                "name": "Campaign End date"
            }
        },
        "twitter": {
            "name": {
                "name": "Twitter Share",
                "placeholder": "Give a name to your Campaign"
            },
            "description": {
                "name": "Description",
                "description": "Add some description to this campaign",
                "placeholder": "Give a description to your Campaign"
            },
            "what_kind_of_reward": {
                "name": "Choose the type of reward",
                "description": "The reward can be either points or a discount reward.  The discount reward will be automatically created and awarded to the customers as soon as he meets this campaign eligibility. "
            },
            "choose_coupon": {
                "name": "Choose the coupon reward",
                "description": "Make sure you created the reward at the Rewards section."
            },
            "set_points": {
                "name": "Set points",
                "description": "Points to be earned by this campaign."
            },
            "message": {
                "name": "Share Message",
                "description": "Enter a text that can be shared by the customer in the social media. Customers can alter this text before they share. "
            },
            "start_date": {
                "name": "Campaign Start date"
            },
            "end_date": {
                "name": "Campaign End date"
            }
        },
        "whatsapp": {
            "name": {
                "name": "Whatsapp Share",
                "placeholder": "Give a name to your Campaign"
            },
            "description": {
                "name": "Description",
                "description": "Add some description to this campaign",
                "placeholder": "Give a description to your Campaign"
            },
            "what_kind_of_reward": {
                "name": "Choose the type of reward",
                "description": "The reward can be either points or a discount reward.  The discount reward will be automatically created and awarded to the customers as soon as he meets this campaign eligibility. "
            },
            "choose_coupon": {
                "name": "Choose the coupon reward",
                "description": "Make sure you created the reward at the Rewards section."
            },
            "set_points": {
                "name": "Set points",
                "description": "Points to be earned by this campaign."
            },
            "message": {
                "name": "Share Message",
                "description": "Enter a text that can be shared by the customer in the social media. Customers can alter this text before they share. "
            },
            "start_date": {
                "name": "Campaign Start date"
            },
            "end_date": {
                "name": "Campaign End date"
            }
        },
        "email": {
            "name": {
                "name": "Email Share",
                "placeholder": "Give a name to your Campaign"
            },
            "description": {
                "name": "Description",
                "description": "Add some description to this campaign",
                "placeholder": "Give a description to your Campaign"
            },
            "what_kind_of_reward": {
                "name": "Choose the type of reward",
                "description": "The reward can be either points or a discount reward.  The discount reward will be automatically created and awarded to the customers as soon as he meets this campaign eligibility. "
            },
            "choose_coupon": {
                "name": "Choose the coupon reward",
                "description": "Make sure you created the reward at the Rewards section."
            },
            "set_points": {
                "name": "Set points",
                "description": "Points to be earned by this campaign."
            },
            "subject": {
                "name": "Email Subject",
                "description": "Enter a predefined subject line for the email. This can be altered by the customer."
            },
            "body": {
                "name": "Email Body",
                "description": "Enter a predefined body line for the email. This can be altered by the customer."
            },
            "start_date": {
                "name": "Campaign Start date"
            },
            "end_date": {
                "name": "Campaign End date"
            }
        }
    },
    "rewards": {
        "name": "Rewards",
        "create_reward_text": "Create Reward",
        "empty_title": "You’ve not created any rewards for your customers yet.",
        "empty_supporting_text": "Create pre-defined rewards that can be redeemed for points or can be used a direct coupon rewards for earn campaigns.",
        "no_reward_title": "No rewards found!",
        "no_reward_text": "No rewards found in this name, Create new reward.",
        "add_reward": "Create a reward",
        "add_new_reward": "Choose reward type",
        "reward_type": "Reward Type",
        "success_message": "Reward created successfully",
        "search": "Search rewards..",
        "create_reward": {
            "fixed_discount": {
                "name": "Fixed Discount",
                "description": "Reward with Fixed $ discount."
            },
            "percentage_discount": {
                "name": "Percentage Discount",
                "description": "Reward with a percentage discount."
            },
            "free_shipping": {
                "name": "Free Shipping",
                "description": "Customer get Free Shipping as a Reward."
            },
            "free_product": {
                "name": "Free Product",
                "description": "Provide a Specific product as a gift."
            }
        },
        "fixed_discount": {
            "name": {
                "name": "Fixed Discount",
                "placeholder": "Title for the Reward"
            },
            "description": {
                "name": "Description",
                "description": "Enter a description for the reward.",
                "placeholder": "Give a description to your reward"
            },
            "set_points": {
                "name": "Set points",
                "description": "Enter value of points to be used to redeem this reward"
            },
            "choose_reward": {
                "name": "Choose how this reward should be used?",
                "point": "This reward will be provided for redeeming their points",
                "coupon": "Reward as a coupon code immediately after completing a campaign."
            },
            "display_name": {
                "name": "Display name for the coupon (when redeeming)",
                "description": "What would be the name to show for the discount when customer redeems",
                "placeholder": "Display name for this reward"
            },
            "discount_value": {
                "name": "Discount value"
            },
            "expire": {
                "name": "Coupon Expiry",
                "description": "Set when the coupon expires once claimed."
            },
            "expiry_email": {
                "name": "Expiry Notification",
                "description": "An expiry email will be sent from the date the customer redeems the points/reward. Set how many days to wait before sending the expiry notification email"
            },
            "enable_expiry_email": {
                "label": "Would you like to send an expiry email?"
            }
        },
        "points_conversion": {
            "name": {
                "name": "Points Conversion",
                "placeholder": "Title for the Reward"
            },
            "description": {
                "name": "Description",
                "description": "Enter a description for the reward.",
                "placeholder": "Give a description to your reward"
            },
            "set_points": {
                "name": "Redeem points",
                "description": "Set how many points can be redeemed for a discount amount. Example: 500 points for $5."
            },
            "discount_value": {
                "name": "value of the discount"
            },
            "display_name": {
                "name": "Display name for the coupon (when redeeming)",
                "description": "What would be the name to show for the discount when customer redeems",
                "placeholder": "Display name for this reward"
            },
            "expire": {
                "name": "Coupon Expiry",
                "description": "Set when the coupon expires once claimed."
            },
            "expiry_email": {
                "name": "Expiry Notification",
                "description": "An expiry email will be sent from the date the customer redeems the points/reward. Set how many days to wait before sending the expiry notification email"
            },
            "enable_expiry_email": {
                "label": "Would you like to send an expiry email?"
            }
        },
        "percentage_discount": {
            "name": {
                "name": "Percentage Discount",
                "placeholder": "Title for the Reward"
            },
            "description": {
                "name": "Description",
                "description": "Enter a description for the reward.",
                "placeholder": "Give a description to your reward"
            },
            "set_points": {
                "name": "Set points",
                "description": "Enter value of points to be used to redeem this reward"
            },
            "choose_reward": {
                "name": "Choose how this reward should be used?",
                "point": "This reward will be provided for redeeming their points",
                "coupon": "Reward as a coupon code immediately after completing a campaign."
            },
            "display_name": {
                "name": "Display name for the coupon (when redeeming)",
                "description": "What would be the name to show for the discount when customer redeems",
                "placeholder": "Display name for this reward"
            },
            "discount_value": {
                "name": "Discount value"
            },
            "expire": {
                "name": "Coupon Expiry",
                "description": "Set when the coupon expires once claimed."
            },
            "expiry_email": {
                "name": "Expiry Notification",
                "description": "An expiry email will be sent from the date the customer redeems the points/reward. Set how many days to wait before sending the expiry notification email"
            },
            "enable_expiry_email": {
                "label": "Would you like to send an expiry email?"
            }
        },
        "free_shipping": {
            "name": {
                "name": "Free shipping",
                "placeholder": "Title for the Reward"
            },
            "description": {
                "name": "Description",
                "description": "Enter a description for the reward.",
                "placeholder": "Give a description to your reward"
            },
            "set_points": {
                "name": "Set points",
                "description": "Enter value of points to be used to redeem this reward"
            },
            "choose_reward": {
                "name": "Choose how this reward should be used?",
                "point": "This reward will be provided for redeeming their points",
                "coupon": "Reward as a coupon code immediately after completing a campaign."
            },
            "display_name": {
                "name": "Display name for the coupon (when redeeming)",
                "description": "What would be the name to show for the discount when customer redeems",
                "placeholder": "Display name for this reward"
            },
            "discount_value": {
                "name": "Discount value"
            },
            "expire": {
                "name": "Coupon Expiry",
                "description": "Set when the coupon expires once claimed."
            },
            "expiry_email": {
                "name": "Expiry Notification",
                "description": "An expiry email will be sent from the date the customer redeems the points/reward. Set how many days to wait before sending the expiry notification email"
            },
            "enable_expiry_email": {
                "label": "Would you like to send an expiry email?"
            }
        },
        "free_product": {
            "name": {
                "name": "Free Product",
                "placeholder": "Title for the Reward"
            },
            "description": {
                "name": "Description",
                "description": "Enter a description for the reward.",
                "placeholder": "Give a description to your reward"
            },
            "set_points": {
                "name": "Set points",
                "description": "Enter value of points to be used to redeem this reward"
            },
            "choose_reward": {
                "name": "Choose how this reward should be used?",
                "point": "This reward will be provided for redeeming their points",
                "coupon": "Reward as a coupon code immediately after completing a campaign."
            },
            "display_name": {
                "name": "Display name for the coupon (when redeeming)",
                "description": "What would be the name to show for the discount when customer redeems",
                "placeholder": "Display name for this reward"
            },
            "free_product": {
                "name": "Free Product",
                "description": "select product(s)"
            },
            "expire": {
                "name": "Coupon Expiry",
                "description": "Set when the coupon expires once claimed."
            },
            "expiry_email": {
                "name": "Expiry Notification",
                "description": "An expiry email will be sent from the date the customer redeems the points/reward. Set how many days to wait before sending the expiry notification email"
            },
            "enable_expiry_email": {
                "label": "Would you like to send an expiry email?"
            }
        }
    },
    "settings": {
        "name": "Settings",
        "license": {
            "name": "License",
            "validate": "validate",
            "description": "You can get your license key from your",
            "flycart": "account at WPLoyalty website",
            "license_key": {
                "name": "License Key",
                "placeholder": "Enter your license key here"
            },
            "error_message": "Error in validating license"
        },
        "earn_point": {
            "name": "Points Settings",
            "earn_point": {
                "name": "Rounding Mode for points earned",
                "description": "Ex: If a user has spent 5.50 on a product, round up or to the nearest integer would make 6 points whereas round down will earn him 5 points."
            },
            "earn_order": {
                "name": "Success order statuses",
                "description": "Customer will be rewarded when the order is successful. Choose the order statuses that are considered as order success."
            },
            "point_text": {
                "name": "Label for the \"points\"",
                "description": "Enter the label for points. If you want to call the points as beans, you can enter \"beans\" here. So customer will see points messages like:  Earn 20 beans for purchasing this product"
            },
            "my_account_label": {
                "name": "My Account Label Icon Display Position",
                "description": "In My Account Page, Point label icon display position."
            },
            "prefix_reward": {
                "name": "Prefix to use for reward coupons",
                "description": "This will be used as a prefix when generating a reward coupon"
            },
            "prefix_referral": {
                "name": "Prefix for referral code",
                "description": "The text here will be used as a prefix when generating a unique referral code for the customer"
            }
        },
        "pages": {
            "name": "Customer Reward Page",
            "description": "",
            "create_page": {
                "name": "Create loyalty page",
                "link_text": "Create"
            }
        },
        "display_message": {
            "name": "Display Messages",
            "description": "Includes product / cart and checkout pages",
            "colors_heading": "Display message styles",
            "product_message_display": {
                "name": "Choose the position to show the points message",
                "description": "In My Account Page, Point label icon display position."
            },
            "message_for_earn_points": {
                "name": "Cart / Checkout page message for earn points",
                "description": "This text will be displayed in Cart and checkout page when points are earned. Shortcodes: {wlr_points} {wlr_points_label)"
            },
            "earn_points_cart_page_message": {
                "name": "Display position of arn points cart page message",
                "description": "Choose where to show the earned points message on the cart page - before or after cart items"
            },
            "message_for_redeemed_points": {
                "name": "Cart / Checkout page message for Redeem points",
                "description": "This text will be displayed on the Cart and Checkout page when points are available for Redemption. Shortcodes: {wlr_points}, {wlr_points_balance} {wlr_points_label}"
            },
            "redeem_points_cart_page_message": {
                "name": "Display Position Of Redeem Points Cart Page Message",
                "description": "Choose where to show the redeem points message on the cart page - before/after cart items"
            },
            "thank_you_page": {
                "name": "Message on Thank you page ",
                "description": "This text will be displayed on the thank you / order received page when points were earned. Shortcodes: {wlr_points}, {wlr_total_points}, {wlr_points_label}."
            },
            "thank_you_message": {
                "name": "Thank you message display position",
                "description": "Choose where to show the message on thank you page"
            },
            "order_review": {
                "name": " Order Review Earn Point Text"
            },
            "border_color": {
                "name": "Border color",
                "description": ""
            },
            "text_color": {
                "name": "Text color",
                "description": ""
            },
            "background_color": {
                "name": "Background color",
                "description": ""
            }
        }
    }
}
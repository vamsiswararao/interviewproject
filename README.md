1. Create a page with [Your, all, blocked] cards tabs.
2. Cards can be of two types ['burner', "subscription"]
a. for burner cards show expiry in card design
b. for subscription card show limit as shown
c. A card type is displayed on the top right corner of each card, you can refer
to the image for the icon.
3. When a user clicks on your tab they should see cards belonging to them through
4. Design the card listing layout as per the design given below.
5. Since API response will be paginated you need to implement infinite scroll to
fetch more data, you can fetch 10 records per call.
6. Implement search by card name.
7. Implement filter dropdown as shown in the figure below.
8. You can share the code for review through GitHub and also host the application
for us to check.
9. You can use any framework, preferably Vue or React.
10. Handle tab routing through URLs for brownie points.
You can use the following JSON structure for your mock API

{data: [{
name: 'Mixmax',
budget_name: 'Software subscription',
owner_id: 1,
spent: {
value: 100,
currency: "SGD"
},
available_to_spend: {
value: 1000,
currency: "SGD"
},
card_type: "burner",
expiry: 9 feb,
limit: 100,
status: 'active'
}], page: 1, per_page: 10, total: 100}

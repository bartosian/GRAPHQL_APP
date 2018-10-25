query OrganizationForLearningReact(
    $organization: String!,
    $repository: String!
) {
    organization(login: $organization) {
        name
        url
        repository(name: $repository) {
            name
        }
    }
}

{
    "organization": "the-road-to-learn-react",
    "repository": "the-road-to-learn-react-chinese"
}
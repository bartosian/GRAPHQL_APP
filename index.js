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

query OrganizationForLearningReact(
    $organization: String!,
    $repository: String!,
    $withFork: Boolean!
) {
    organization(login: $organization) {
        name
        url
        repository(name: $repository) {
            name
            forkCount @include(if: $withFork)
        }
    }
}

mutation AddStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
        starrable {
            id
            viewerHasStarred
        }
    }
}
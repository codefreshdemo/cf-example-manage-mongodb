# Welcome

So, you've decided to try Codefresh? Welcome on board!

Using this repository we'll help you get up to speed with basic functionality such as: *compiling*, *testing* and *building Docker images*.

This project uses `Node Js` to build an application which will eventually become a distributable Docker image.

## Looking around

In the root of this repository you'll find a file named `codefresh.yml`, this is our [build descriptor](https://docs.codefresh.io/docs/what-is-the-codefresh-yaml) and it describes the different steps that comprise our process.
Let's quickly review the contents of this file:

### Compiling and testing

To compile and test our code we use Codefresh's [Freestyle step](https://docs.codefresh.io/docs/steps#section-freestyle).

The Freestyle step basically let's you say "Hey, Codefresh! Here's a Docker image. Create a new container and run these commands for me, will ya?"

```yml
build_prj:
    type: build
    description: codefresh example
    image_name: codefreshio/express-angular-mongo
    dockerfile: Dockerfile
    tag: ${{CF_BRANCH}}

  mongo_seed:
    type: build
    image_name: codefreshio/mongo_seed
    dockerfile: Dockerfile
    working_directory: ${{main_clone}}/mongo-seed
    tag: ${{CF_BRANCH}}
```

The `image` field states which image should be used when creating the container (Similar to Travis CI's `language` or circleci`s `machine`).

The `commands` field is how you specify all the commands that you'd like to execute

### Launching

This is where it gets real! Let's use Codefresh's [Launch Composition step](https://docs.codefresh.io/docs/steps#section-launch-composition) to run our composition within Codefresh!

Launching compositions within Codefresh means you have your very own staging area, at a click of a button!
```yml
launch_composition:
    type: launch-composition
    environmentName: 'env-composition-example'
    entry_point: client
    composition:
      version: '2'
      services:
        mongodb:
          image: mongo
          command: mongod --smallfiles
          ports:
            - 27017

        mongo_seed:
          image: ${{mongo_seed}}
          links:
            - mongodb

        client:
          image: ${{build_prj}}
          links:
            - mongodb
          ports:
            - 9000
          environment:
            - MONGO_URI=mongodb:27017/exampleDb
```

Using the `composition` field, we direct Codefresh to the location if the `docker-compose` file in our repository.

Once the Launch Composition step has completed successfully, you'll be able to review and share your running composition in the [Environments page](https://docs.codefresh.io/docs/share-environment-with-your-test).

Now that we've gotten a grip on the flow, let's get cracking!


## Using This Example

To use this example:

* Fork this repository to your own [INSERT_SCM_SYSTEM (git, bitbucket)] account.
* Log in to Codefresh using your [INSERT_SCM_SYSTEM (git, bitbucket)] account.
* Click the `Add Service` button.
* Select the forked repository.
* Select the `I have a Codefresh.yml file` option.
* Complete the wizard.
* Go to the pipeline and provide the environment variables
* Rejoice!
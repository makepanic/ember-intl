module.exports = {
  scenarios: [
    {
      name: 'ember-1-13-1',
      dependencies: {
        'ember': '1.13.1'
      }
    },
    {
      name: 'ember-2-0',
      dependencies: {
        'ember': '~2.0.0'
      }
    },
    {
      name: 'ember-2-1',
      dependencies: {
        'ember': '~2.1.0'
      }
    },
    {
      name: 'ember-2-2',
      dependencies: {
        'ember': '~2.2.0'
      }
    },
    {
      name: 'ember-2-3',
      dependencies: {
        'ember': '~2.3.0'
      }
    },
    {
      name: 'default',
      dependencies: { }
    },
    {
      name: 'ember-release',
      dependencies: {
        'ember': 'components/ember#release'
      },
      resolutions: {
        'ember': 'release'
      }
    },
    {
      name: 'ember-beta',
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: {
        'ember': 'beta'
      }
    },
    {
      name: 'ember-canary',
      dependencies: {
        'ember': 'components/ember#canary'
      },
      resolutions: {
        'ember': 'canary'
      }
    }
  ]
};

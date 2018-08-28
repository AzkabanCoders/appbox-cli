const {Command, flags} = require('@oclif/command')

class BabuiaCommand extends Command {
  async run() {
    const {flags} = this.parse(BabuiaCommand)
    const name = flags.name || 'Babuia'
    this.log(`Hello, dear ${name}!`)
  }
}

BabuiaCommand.description = `Babuia command is cool
...
Description of BabuiaCommand goes here!
`

BabuiaCommand.flags = {
  name: flags.string({char: 'n', description: 'Babuia\'s name'}),
}

module.exports = BabuiaCommand

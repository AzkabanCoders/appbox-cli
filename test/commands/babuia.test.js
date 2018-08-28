const {expect, test} = require('@oclif/test')

describe('babuia', () => {
  test
  .stdout()
  .command(['babuia'])
  .it('runs babuia', ctx => {
    expect(ctx.stdout).to.contain('Hello, dear Babuia!')
  })

  test
  .stdout()
  .command(['babuia', '--name', 'Klaygato'])
  .it('runs babuia --name Klaygato', ctx => {
    expect(ctx.stdout).to.contain('Klaygato')
  })
})

var expect = require('chai').expect;

describe('Spyfall Game', function () {
    var gameId;

    it('should allow host to create a game', function () {
        Host.url('/');

        Host.click('#btn-new-game');

        Host.setValue('#player-name', 'Host');

        Host.click('#create-game input[type="submit"]');

        Host.waitForExist('h4=Waiting For Players...');

        gameId = Host.getHTML('.access-code span', false);

        expect(gameId).to.have.length.above(0);
    });

    it('should allow others to join the game', function () {
        Guest1.url('/');

        Guest1.click('#btn-join-game');

        Guest1.setValue('#access-code', gameId);

        Guest1.setValue('#player-name', 'Bob');

        Guest1.click('input[value="Join"]');

        Guest1.waitForExist('h4=Waiting For Players...');

        expect(Guest1.getUrl()).to.contain(gameId);
    })

    it.skip('should show Bob in list of names on Host browser', function () {

    })
})
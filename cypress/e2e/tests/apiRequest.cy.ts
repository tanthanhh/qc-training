import apiRequest from "../pages/apiRequest";

describe('Api testing', () => {
    let userToken = '';

    it('Test get list boooks', () => {
        cy.request(apiRequest.getListBook).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('books');
            const responseBodyString = JSON.stringify(response.body, null, 2);
            cy.log(responseBodyString);
        });
    });

    it('Test generate token', function () {
        cy.request({
            method: 'POST',
            url: apiRequest.addUser,
            body: {
                "userName": "phamtanthanh",
                "password": "Thanh@123"
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            const responseBodyString = JSON.stringify(response.body, null, 2);
            userToken = response.body.token;
            cy.log(userToken);
        })
    });

    it('Test get user', function () {
        const getUser = apiRequest.getUser.replace('{userId}', 'f7bf6e79-8954-47d2-bad8-a96555eacff1');

        cy.request({
            method: 'GET',
            url: getUser,
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        }).then(response => {
            expect(response.status).to.eq(200);

        })
    })

    it('Test delete user', function () {
        cy.request({
            method: 'DELETE',
            url: apiRequest.deleteUser,
        }).then(response => {
            expect(response.status).to.eq(204);
            const responseBodyString = JSON.stringify(response.body, null, 2);
            cy.log(responseBodyString);
        });
    });

    it('Test put user', function () {
        cy.request({
            method: 'PUT',
            url: apiRequest.updateUser,
            body: {
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            const responseBodyString = JSON.stringify(response.body, null, 2);
            cy.log(responseBodyString);
        });
    });
});
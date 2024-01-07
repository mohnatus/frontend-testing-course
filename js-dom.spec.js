/**
 * @jest-environment jsdom
 */

describe('test js-dom', () => {
	beforeEach(() => {
		document.body.innerHTML = '<button>Hello</button>';
	});
	test('use js-dom', () => {
		const button = document.querySelector('button');
		expect(button.textContent).toBe('Hello');
	});
});

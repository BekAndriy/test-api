export const TEST = 'OPEN_USER_SETTINGS';

export function test(state = [], action) {
    if (action.type === TEST) {
        return [
            ...state,
            action.test
        ];
    }
    return state;
}
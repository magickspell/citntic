/*
func return route.
*/
interface funcProps {
    code: string,
}

export const getRouteFunc = (obj: funcProps): string => {
    switch (obj.code) {

        case '':
            return '/';

        case 'main':
            return '/';

        case 'chat':
            return '/chat';

        case 'quotes':
            return '/quotes';

        case 'info':
            return "/info";

        case 'auth':
            return '/auth';

        case 'private-policy':
            return '/private-policy';

        case 'user':
            return "/user";

        case 'settings':
            return "/settings";

        //DEFAULTS
        default:
            return '/';
    }
}
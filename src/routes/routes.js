import { Home } from '~/pages/Home';
import { Profile } from '~/pages/Profile';
import { ProfileLayout } from '~/layouts/ProfileLayout';
import { LoginLayout } from '~/layouts/LoginLayout';
import { ViewStoryLayout } from '~/layouts/ViewStoryLayout';
import { Login } from '~/pages/Login';
import { StoryView } from '~/pages/StoryView';

import config from '~/config';
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile, layout: ProfileLayout },
    { path: config.routes.login, component: Login, layout: LoginLayout },
    { path: config.routes.story, component: StoryView, layout: ViewStoryLayout },
];
const privateRoutes = [];
export { privateRoutes, publicRoutes };

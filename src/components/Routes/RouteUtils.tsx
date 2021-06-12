import { History } from 'history';

export const getRouterLinkProps = (to: string, history: History<any>) => {
  // Be sure that the component accepts both 'href' and 'onClick' props!
  // History is provided by 'useHistory()' hook from react-router-dom

  const href = to;

  const onClick = (event: any) => {
    // Prevent regular link behavior, which causes a browser refresh.
    event.preventDefault();
    history.push(to);
  };

  return { href, onClick };
};

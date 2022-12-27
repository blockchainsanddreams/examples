export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'about' : IDL.Func([], [IDL.Text], ['query']),
    'home' : IDL.Func([], [IDL.Text], ['query']),
    'page' : IDL.Func([], [IDL.Text], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };

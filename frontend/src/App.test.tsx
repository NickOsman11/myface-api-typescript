import React, { useEffect } from 'react';
import { render ,screen, fireEvent, getByText, getByRole, getByPlaceholderText} from '@testing-library/react';
import App from './App';
import CreateUserPage from './AppComponent/CreateUserPage';
import userEvent from '@testing-library/user-event';
import { waitFor } from "@testing-library/react";

// test('renders Hello world text', () => {
//   const { getByText } = render(<App />);
//   const textElement = getByText(/MyFace/i);
//   expect(textElement).toBeInTheDocument();
// });

test('renders Hello world text', () => {
    const { getByPlaceholderText } = render(<CreateUserPage />);
    const textElement = getByPlaceholderText(/Email/i);
    expect(textElement).toBeInTheDocument();
  });

test.only('renders 1 input in createUserPage', () => {
render(<CreateUserPage />);
const inputField = screen.getByPlaceholderText("Email")
waitFor(()=>expect(inputField).toBeInTheDocument());
});

test('pass value into input field', () => {
    render(<CreateUserPage />);

    userEvent.type(screen.getByPlaceholderText("Name"), "hi");
    userEvent.type(screen.getByPlaceholderText("Email"), "test@mail.com");
    userEvent.type(screen.getByPlaceholderText("Username"), "hi1");
    userEvent.type(screen.getByPlaceholderText("Cover Image"), "hi2");
    userEvent.type(screen.getByPlaceholderText("Profile Image"), "hi3");
    
    // console.log(screen.findAllByRole())
    waitFor(()=>expect(screen.getByPlaceholderText("Name")).toHaveValue("hi"));
    waitFor(()=>expect(screen.getByPlaceholderText("Email")).toHaveValue("test@mail.com"));
    waitFor(()=>expect(screen.getByPlaceholderText("Username")).toHaveValue("hi"));
    waitFor(()=>expect(screen.getByPlaceholderText("Cover Image")).toHaveValue("hi"));
    waitFor(()=>expect(screen.getByPlaceholderText("Profile Image")).toHaveValue("hi"));
    // expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });

  
//   {
//     container: HTMLDivElement {
//       '__reactContainer$wehgv01czjt': FiberNode {
//         tag: 3,
//         key: null,
//         elementType: null,
//         type: null,
//         stateNode: [FiberRootNode],
//         return: null,
//         child: null,
//         sibling: null,
//         index: 0,
//         ref: null,
//         pendingProps: null,
//         memoizedProps: null,
//         updateQueue: [Object],
//         memoizedState: [Object],
//         dependencies: null,
//         mode: 1,
//         flags: 0,
//         subtreeFlags: 0,
//         deletions: null,
//         lanes: 16,
//         childLanes: 0,
//         alternate: [FiberNode],
//         actualDuration: 0,
//         actualStartTime: -1,
//         selfBaseDuration: 0,
//         treeBaseDuration: 0,
//         _debugSource: null,
//         _debugOwner: null,
//         _debugNeedsRemount: false,
//         _debugHookTypes: null
//       },
//       _reactListening7124r98vxi7: true
//     },
//     baseElement: HTMLBodyElement {},
//     debug: [Function: debug],
//     unmount: [Function: unmount],
//     rerender: [Function: rerender],
//     asFragment: [Function: asFragment],
//     findAllByLabelText: [Function: bound ],
//     findByLabelText: [Function: bound ],
//     getAllByLabelText: [Function: bound ],
//     getByLabelText: [Function: bound ],
//     queryAllByLabelText: [Function: bound ],
//     queryByLabelText: [Function: bound ],
//     findAllByPlaceholderText: [Function: bound ],
//     findByPlaceholderText: [Function: bound ],
//     getAllByPlaceholderText: [Function: bound ],
//     getByPlaceholderText: [Function: bound ],
//     queryAllByPlaceholderText: [Function: bound ],
//     queryByPlaceholderText: [Function: bound ],
//     findAllByText: [Function: bound ],
//     findByText: [Function: bound ],
//     getAllByText: [Function: bound ],
//     getByText: [Function: bound ],
//     queryAllByText: [Function: bound ],
//     queryByText: [Function: bound ],
//     findAllByDisplayValue: [Function: bound ],
//     findByDisplayValue: [Function: bound ],
//     getAllByDisplayValue: [Function: bound ],
//     getByDisplayValue: [Function: bound ],
//     queryAllByDisplayValue: [Function: bound ],
//     queryByDisplayValue: [Function: bound ],
//     findAllByAltText: [Function: bound ],
//     findByAltText: [Function: bound ],
//     getAllByAltText: [Function: bound ],
//     getByAltText: [Function: bound ],
//     queryAllByAltText: [Function: bound ],
//     queryByAltText: [Function: bound ],
//     findByTitle: [Function: bound ],
//     getAllByTitle: [Function: bound ],
//     getByTitle: [Function: bound ],
//     queryAllByTitle: [Function: bound ],
//     queryByTitle: [Function: bound ],
//     findAllByRole: [Function: bound ],
//     findByRole: [Function: bound ],
//     getAllByRole: [Function: bound ],
//     getByRole: [Function: bound ],
//     queryAllByRole: [Function: bound ],
//     queryByRole: [Function: bound ],
//     findAllByTestId: [Function: bound ],
//     findByTestId: [Function: bound ],
//     getAllByTestId: [Function: bound ],
//     getByTestId: [Function: bound ],
//     queryAllByTestId: [Function: bound ],
//     queryByTestId: [Function: bound ]
//   }
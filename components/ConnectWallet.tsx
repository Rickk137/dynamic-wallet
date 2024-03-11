import { useDynamicContext } from '@dynamic-labs/sdk-react-core';

export function ConnectWallet() {
  const { primaryWallet, handleLogOut, setShowAuthFlow } = useDynamicContext();

  if (primaryWallet?.address) {
    return (
      <div>
        {primaryWallet?.address}
        <br />

        <button
          style={{
            width: '200px',
            height: '40px',
          }}
          onClick={handleLogOut}
        >
          log out!
        </button>
      </div>
    );
  }

  return (
    <button
      style={{
        width: '200px',
        height: '40px',
      }}
      onClick={() => setShowAuthFlow(true)}
    >
      login
    </button>
  );
}

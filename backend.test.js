const ENDPOINT_URL = 'http://162.243.105.170:80/LAMPAPI/SearchColors.php'; // Update with your actual path

describe('SearchColors PHP Endpoint', () => {
  test('returns matching colors when records exist', async () => {
    const payload = {
      search: 'Blue',
      userId: 1 // Use a valid UserID from your test database
    };

    const response = await fetch(ENDPOINT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    expect(response.status).toBe(200);


    const data = await response.json();
    expect(data.error).toBe('');
    expect(Array.isArray(data.results)).toBe(true);
    expect(data.results).toContain('Light Blue'); // Adjust based on your seeded DB data
  });

  test('returns "No Records Found" error when no colors match', async () => {
    const payload = {
      search: 'NonExistentColorXYZ123',
      userId: 1
    };

    const response = await fetch(ENDPOINT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data.error).toBe('No Records Found');
    expect(data.id).toBe(0);
  });

  test('returns all colors for a user when search string is empty', async () => {
    const payload = {
      search: '',
      userId: 1
    };

    const response = await fetch(ENDPOINT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
 body: JSON.stringify(payload),
    });

    const data = await response.json();
    expect(data.error).toBe('');
    expect(data.results.length).toBeGreaterThan(0);
  });
});


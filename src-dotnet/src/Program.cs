using Sugjo.Ocularus.Iconifier.Extractors;

var peIconExtractor = new PEIconExtractor();
var urlIconExtractor = new UrlIconExtractor();

foreach (var arg in args)
{
	if (string.IsNullOrWhiteSpace(arg))
	{
		Console.WriteLine($"[WARNING]: The '{arg}' was null, empty or consist only of white spaces. Skipping...");
		continue;
	}

	if (!File.Exists(arg))
	{
		Console.WriteLine($"[WARNING]: The file on '{arg}' path does not exists. Skipping...");
		continue;
	}

	if (Path.GetExtension(arg) is ".ico" or ".exe" or ".dll")
	{
		await peIconExtractor.ExtractToAsync(arg);
	}
	else if (Path.GetExtension(arg) is ".url")
	{
		await urlIconExtractor.ExtractToAsync(arg);
	}
	else
	{
		Console.WriteLine($"[WARNING]: The file extension is not implemented. Skipping...");
		continue;
	}
}

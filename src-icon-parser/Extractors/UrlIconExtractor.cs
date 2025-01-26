using Microsoft.Extensions.Configuration;

namespace Sugjo.Ocularus.Iconifier.Extractors;

public sealed class UrlIconExtractor : IIconExtractor
{
	public Task ExtractToAsync(string filePath, string? outputPath = null, CancellationToken cancellationToken = default)
	{
		var configuration = new ConfigurationBuilder()
			.AddIniFile(filePath)
			.Build();

		var iconPath = configuration.GetRequiredSection("InternetShortcut:IconFile").Value!;

		outputPath ??= $"{Path.GetFileNameWithoutExtension(iconPath)}.ico";

		File.Copy(iconPath, outputPath, overwrite: true);

		return Task.CompletedTask;
	}
}
